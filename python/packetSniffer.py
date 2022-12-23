import socket
import struct


def main():
    # Get host
    host = socket.gethostbyname(socket.gethostname())
    print('IP: {}'.format(host))

    # Create a raw socket and bind it
    conn = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_IP)
    conn.bind(("192.168.100.6", 0))

    # Include IP headers
    conn.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)
    # Enable promiscuous mode
    conn.ioctl(socket.SIO_RCVALL, socket.RCVALL_ON)

    while True:
        # Recive data
        raw_data, addr = conn.recvfrom(65536)

        # Unpack data
        version, header_length, ttl, proto, src, target, data=ip_packet(raw_data)        
           
        
        src_port, dest_port, sequence, acknowledgement, flag_urg, flag_ack, flag_psh, flag_rst, flag_syn , http_data = tcp_segment(data) 
        
        if dest_port == 80:
            print('\nIP packet:')
            print("Destination ip: {}".format(target))
            print("Source IP: {}".format(src))
            print("Protocol: {}".format(proto))
            print("Version: {}".format(version))
            print("Header length: {}".format(header_length))
            print("TTL: {}".format(ttl))
        
            print('\nTCP segment:')
            print("Source port: {}".format(src_port))
            print("Destination port: {}".format(dest_port))
            print("Sequence: {}".format(sequence))
            print("Acknowledgement: {}".format(acknowledgement))
            print("URG: {}".format(flag_urg))
            print("ACK: {}".format(flag_ack))   
            print("PSH: {}".format(flag_psh))
            print("RST: {}".format(flag_rst))
            print("SYN: {}".format(flag_syn))
            
            print('\nHTTP packet:')
            try:
                http = http_data.decode('utf-8')
                http_info = str(http).split('\r\n')
                for line in http_info:
                    print(line)
            except:
                print('HTTP packet could not be decoded')
                
                   

#unpack ip packet
def ip_packet(data):
    version_header_length = data[0]
    version = version_header_length >> 4
    header_length = (version_header_length & 15) * 4
    ttl, proto, src, target = struct.unpack('! 8x B B 2x 4s 4s', data[:20])
    return version, header_length, ttl, proto, ipv4(src), ipv4(target), data[header_length:]

def ipv4(addr):
    return '.'.join(map(str, addr))

def tcp_segment(data):  
    (src_port, dest_port, sequence, acknowledgement, offset_reserved_flags) = struct.unpack('! H H L L H', data[:14])
    offset = (offset_reserved_flags >> 12) * 4          
    flag_urg = (offset_reserved_flags & 32) >> 5
    flag_ack = (offset_reserved_flags & 16) >> 4                    
    flag_psh = (offset_reserved_flags & 8) >> 3     
    flag_rst = (offset_reserved_flags & 4) >> 2
    flag_syn = (offset_reserved_flags & 2) >> 1
        
    return src_port, dest_port, sequence, acknowledgement, flag_urg, flag_ack, flag_psh, flag_rst, flag_syn, data[offset:]                  


main()

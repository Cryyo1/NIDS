import React from "react";
import CriticalityIcon from "./CriticalityIcon";

// 
const DetailedNotification = ({ crit, title, subtitle, time, ipsource, ipdestination, description }) => {
	return <div class="grid grid-cols-4 gap-4">
		<div class="..."><CriticalityIcon criticality={crit} iconSize='2em' /></div>
		<div class="text-white col-span-2 text-l ... justify-center align-center">{title}</div>
		<div class="text-white ...">18:00</div>
		<div class="col-span-4 text-white text-l ...">{subtitle}</div>
		<div class="col-span-4 text-white text-l ...">IP SOURCE : {ipsource}</div>
		<div class="col-span-4 text-white text-l ...">IP DESTINATION : {ipdestination} </div>
		<div class="col-span-4 text-white text-l ...">description : {description}</div>
	</div>
}
export default DetailedNotification;

/*
onst DetailedNotification = ({ crit, title, subtitle, time, ipsource, ipdestination, description }) => {
	return <div class="grid grid-cols-4 gap-4">
		<div class="..."><CriticalityIcon criticality={0} iconSize='4em' /></div>
		<div class="text-white col-span-2 text-4xl ...">Attaque DDOS</div>
		<div class="text-white ...">18:00</div>
		<div class="col-span-4 text-white text-xl ...">l7adja ahi t'herrdet</div>
		<div class="col-span-4 text-white text-xl ...">IP source : 192.168.1.12</div>
		<div class="col-span-4 text-white text-xl ...">IP Destination : 192.168.1.13</div>
		<div class="col-span-4 text-white text-xl ...">La menace est une attaque ddos realisée par boudjemaa appelez l'admin rezo souhib a fixi le probleme</div>
	</div>
}
*/
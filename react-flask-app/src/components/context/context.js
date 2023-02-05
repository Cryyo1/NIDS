import { createContext } from 'react';
export const LogContext = createContext({
	currentLog:
	{
		"id": "1",
		'title': 'intrusion',
		'subtitle': 'brute force',
		'description': 'une tentative de brute force a été détectée',
		'time': '15:30',
		'crit': 2,
		'data': '',
		'ip_source': "192.168.1.74",
		"ip_dest": "192.168.1.114"

	},
	setCurrentID: () => { }
});
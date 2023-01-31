import { createContext } from 'react';
export const LogContext = createContext({
	currentLog:
	{
		"id": "1",
		'title': 'intrusion',
		'subtitle': 'brute force',
		'description': 'une tentative de brute force a été détectée',
		'time': '15h30',
		'crit': 70,
		'data': '',
		'ip_source': "192.168.1.74",
		"ip_dest": "192.168.1.114"

	},
	setCurrentID: () => { }
});
export const Time = [
	{value: 'morning', label: '09:00am - 12:00pm'  },
	{value: 'afternoon', label: '12:00pm - 15:00pm'},
	{value: 'evening', label: '15:00pm - 17:00pm'  },
];

export const TimeOptions = [
	{ value: '0', label: '9:00' },
	{ value: '1', label: '10:00'},
	{ value: '2', label: '11:00'},
	{ value: '3', label: '12:00'},
	{ value: '4', label: '13:00' },
	{ value: '5', label: '14:00'},
	{ value: '6', label: '15:00'},
	{ value: '7', label: '16:00'},
];
export const Kin =[
	{value:'Mother', label: 'Mother'},
	{value:'Father', label: 'Father'},
	{value: 'Brother', label:'Brother'},
	{value:'Sister', label:'Sister'},
	{value:'Grandparent', label:'Grandparent'},
	{value:'Partner', label:'Partner'},
	{value:'Carer', label:'Carer'},

];
export const Days = [
	{value: 'monday', label: 'Monday'      },
	{value: 'tuesday', label: 'Tuesday'    },
	{value: 'wednesday', label: 'Wednesday'},
	{value: 'thursday', label: 'Thursday'  },
	{value: 'friday', label: 'Friday'      },
];

export const Prefixs =[
	{value: "he/his", id:"He/HisPrefixs", label:"He/His"},
	{value: "she/her", id:"She/HerPrefixs", label:"She/Her"},
	{value: "they/their", id:"They/TheirPrefixs", label:"They/Their"},
];

export const L3QualificationsOptions = [
	{ label: "Yes", id: "qualificationYes", value: "yes" },
];

export const Subjects = [{ value: 'computing', label: 'BSc (Hons) Computing and Information Systems' },
	{ value: 'criminology', label: 'BA (Hons) Criminology'},
	{ value: 'digitalArts', label: 'FDA Digital Arts'}
];

export const SubjectInfo = {
	'criminology': "Are you interested in the problem of crime in contemporary societies? If so, our " + 
	"Criminology course may be for you. \n\nAs a Criminology student, you will investigate the nature" + 
	" of crime and criminality as well as studying societies response through the criminal justice" + 
	" system.\n\nYou'll learn about the social and personal impacts of crime and what it means to be" + 
	" a victim of crime. You will understand how societies control and punish disorder and study forms" + 
	" of transnational crime that cross-national borders. Criminology takes a social scientific approach" + 
	" to studying and classifying crime as well as exploring theories around criminal behaviour. In" + 
	" addition to theory, you will study the institutions of the criminal justice system including " + 
	"police, law courts, prisons and probation services.",
	'computing': "This new degree includes developments such as embedding Cisco CCNA networking " + 
	"qualifications into the course through specialist industry related modules. It will introduce " + 
	"a new Cloud Computing module where students will learn how to set up and manage Amazon AWS " + 
	"Cloud services. There are cyber security options, such as Ethical Hacking and Digital Forensics " + 
	"plus the software development provision meets the demands of employers by creating employer ready graduates.",
	'digitalArts': "It's art but it's digital!"
};

export const GCSEGrades = [
	{ value: "9", label: "9 - A*" },
	{ value: "8", label: "8 - A*" },
	{ value: "7", label: "7 - A"  },
	{ value: "6", label: "6 - B"  },
	{ value: "5", label: "5 - B"  },
	{ value: "4", label: "4 - C"  },
	{ value: "3", label: "3 - D"  },
	{ value: "2", label: "2 - E"  },
	{ value: "1", label: "2 - F"  },
	{ value: "1", label: "1 - G"  },
	{ value: "u", label: "U"      },
	{ value: "na", label: "n/a"   },
];

export const UCASGrades = {
	"A Level and AS": {
		"A Levels": [
			{grade: "A*", points: 56},
			{grade: "A", points: 48},
			{grade: "B", points: 40},
			{grade: "C", points: 32},
			{grade: "D", points: 24},
			{grade: "E", points: 16}
		],
		"AS Levels": [
			{grade: "A", points: 20},
			{grade: "B", points: 16},
			{grade: "C", points: 12},
			{grade: "D", points: 8},
			{grade: "E", points: 4},
		]
	},
	"BTEC National (RQF) (From 2016)": {
		"Pearson BTEC Level 3 National Extended Certificate (first teaching from September 2016)": [
			{grade: "D*", points: 56},
			{grade: "D", points: 48},
			{grade: "M", points: 32},
			{grade: "P", points: 24}
		]
	}
};

export const QualificationKey = "qualification";
export const SubjectKey = "subject";
export const GradeKey = "grade";
export const YearKey = "year";

//NOTE: MAKE SURE THAT THIS DOES NOT END WITH / OR YOU WILL BREAK THINGS WITH THE BACKEND
export const BackEnd = "";

export const LoginEndpoint = BackEnd + "/login";
export const LogoutEndpoint = BackEnd + "/logout";
export const AnalyticsEndpoint = BackEnd + "/analytics";
export const SubmitClearingFormEndpoint = BackEnd + "/submitClearingForm";
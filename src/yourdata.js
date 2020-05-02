import tattooImg from "../src/assets/tattoo-thumb.jpg";
import edenImg from "../src/assets/eden-thumb.jpg";
import bheadImg from "../src/assets/bighead-thumb.jpg";
import confectionImg from "../src/assets/confection-thumb.jpg";
import tattooPreviewOne from "../src/assets/tattoo-1.jpg";
import tattooPreviewTwo from "../src/assets/tattoo-2.jpg";
import doorPreviewOne from "../src/assets/door-1.jpg";
import doorPreviewTwo from "../src/assets/door-2.jpg";
import furniturePreviewOne from "../src/assets/furniture-1.jpg";
import furniturePreviewTwo from "../src/assets/furniture-2.jpg";
import confectionPreviewOne from "../src/assets/confection-1.jpg";
import confectionPreviewTwo from "../src/assets/confection-2.jpg";

export default {
	//(Please Do Not Remove The comma(,) after every variable)
	//Change The Website Template
	name: "joshuagomora.",
	headerTagline: [
		//Line 1 For Header
		"You found me! I am",
		"Joshua Gomora",
		".",
		//Line 2 For Header
		"Web Designer. Full-stack Developer.",
	],
	//Contact Email
	contactEmail: "joshuadave.gomora@gmail.com",
	// Add Your About Text Here
	abouttext:
		"I specialize in creating modern web solutions for individuals and businesses. Using the latest technologies and coding standards, I will strive to build you a great web solution. With over 4 years of experience of web design and development for E-commerce websites and landing pages.",
	aboutImage:
		"https://drive.google.com/uc?id=1ZeqTT-92XShbJIRhiYYjF_GnWX4tsLRv",
	//Change This To Hide The Image of About Section (True Or False)
	ShowAboutImage: true, //true or false (Change Here)
	// Change Projects Here
	projects: [
		{
			id: 1, //DO NOT CHANGE THIS (Please)😅
			title: "Tattoo Shop", //Project Title - Add Your Project Title Here
			service: "UI/UX Design", // Add Your Service Type Here
			//Project Image - Add Your Project Image Here
			imageSrc: tattooImg,
			//Project URL - Add Your Project Url Here
			url: "https://havehopetattoo.com/",
			slug: "tattoo-shop",
			client: "Have Hope Tattoo",
			category: "Web · Wordpress · UI/UX Design",
			previewOne: tattooPreviewOne,
			previewTwo: tattooPreviewTwo,
		},
		{
			id: 2, //DO NOT CHANGE THIS (Please)😅
			title: "Eden Roc Garage Doors",
			service: "Website Development",
			imageSrc: edenImg,
			url: "https://www.edenrocgaragedoors.com.au/",
			slug: "eden-roc-garage-doors",
			client: "Swish Design",
			category: "Web · Wordpress · E-commerce",
			previewOne: doorPreviewOne,
			previewTwo: doorPreviewTwo,
		},
		{
			id: 3, //DO NOT CHANGE THIS (Please)😅
			title: "Big Head Design Studio",
			service: "Website Development",
			imageSrc: bheadImg,
			url: "http://chetanverma.com/",
			slug: "big-head-design-studios",
			client: "Swish Design",
			category: "Web · Wordpress · E-commerce",
			previewOne: furniturePreviewOne,
			previewTwo: furniturePreviewTwo,
		},
		{
			id: 4, //DO NOT CHANGE THIS (Please)😅
			title: "Confection of Sweets",
			service: "Logo Design",
			imageSrc: confectionImg,
			url: "",
			client: "Local",
			category: "Branding · Logo Design",
			slug: "confection-of-sweets",
			previewOne: confectionPreviewOne,
			previewTwo: confectionPreviewTwo,
		},

		/*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
	],
	social: [
		// Add Or Remove The Link Accordingly
		{ name: "Github", url: "https://github.com/chetanverma16" },
		{
			name: "LinkedIn",
			url: "https://www.behance.net/chetanverma",
		},
	],
};

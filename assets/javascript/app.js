const cl = console.log;

const cardsArr = [
       {
	       title : "Golden Temple, Punjab",
		   content : "The Golden Temple is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. It is one of the holiest sites in Sikhism, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur."
	   },
	   {
		   title : "Sun Temple, Odisha",
		   content : "Konark Sun Temple is a 13th-century CE Sun temple at Konark about 35 kilometres northeast from Puri city on the coastline in Puri district, Odisha, India. The temple is attributed to king Narasimhadeva I of the Eastern Ganga dynasty about 1250 CE."
	   },
	   {
		   title : "Somnath Temple, Gujarat",
		   content : "The Somnath temple, also called Somanātha temple or Deo Patan, is a Hindu temple located in Prabhas Patan, Veraval in Gujarat, India. It is one of the most sacred pilgrimage sites for Hindus and is the first among the twelve jyotirlinga shrines of Shiva."
	   },
	   {
		   title : "Kedarnath Temple, Uttarakhand",
		   content : "Chota Char Dham Yamunotri Gangotri Kedarnath Badrinath Kedarnath Temple is a Hindu temple, one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range near the Mandakini river, in the state of Uttarakhand, India. The temple is not directly accessible by road "
	   },
	   {
		   title : "Badrinath Temple, Uttarakhand",
		   content : "Badarinath or Badarinarayana Temple is a Hindu temple dedicated to Vishnu. It is situated in the town of Badrinath in Uttarakhand, India. The temple is also one of the 108 Divya Desams dedicated to Vishnu—holy shrines for Vaishnavas—who is worshipped as Badrinath"
	   },
	   {
		   title : "Akshardham Temple, Delhi",
		   content : "Swaminarayan Akshardham is a Hindu temple, and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture. "
	   },
	   {
		   title : "Iskcon Temple, Uttar Pradesh",
		   content : "Sri Krishna Balrama Temple is acknowledged for being the first temple constructed by the International Society for Krishna Consciousness (ISKCON). Built in 1975 by the ISKCON cult, the foundation of the shrine was laid by Swami Prabhupada (founder of ISKCON) himself"
	   },
	   {
		   title : "Mahabodhi Temple, Bihar",
		   content : "The Mahabodhi Temple or the Mahābodhi Mahāvihāra, a UNESCO World Heritage Site, is an ancient, but rebuilt and restored Buddhist temple in Bodh Gaya, Bihar, India, marking the location where the Buddha is said to have attained enlightenment. Bodh Gaya 96 km from Patna."
	   },
	   {
		   title : "Ranakpur Temple, Rajasthan",
		   content : "Ranakpur Jain temple or Chaturmukha Dharana Vihara is a Śvētāmbara Jain temple at Ranakpur dedicated to Tirthankara Rishabhanatha. The temple is located in a village of Ranakpur near Sadri town in the Pali district of Rajasthan. Darna Shah, started construction of the temple"
	   }
];

let dynamicCards = ``;
cardsArr.forEach((cards) => {
	dynamicCards += `
	 <div class="col-lg-4 col-sm-6 col-xs-6">
	   <div class="card mb-5">
	     <div class="card-header bg-info">
		  <h3 class="m-0">${cards.title}</h3>
		 </div>
		 <div class="card-body bg-warning">
		  <p class="m-0">${cards.content}</p>
		 </div>
		 <div class="card-footer d-flex justify-content-between bg-secondary">
		  <button type="button" class="btn btn-primary">Edit</button>
		  <button type="button" class="btn btn-danger">Delete</button>
		 </div>
	   </div>
	 </div>           		 
	`
});

const cardsArry = document.getElementById("cardsArry");
cardsArry.innerHTML = dynamicCards;
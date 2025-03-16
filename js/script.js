const familyData = [
        {
            "House No": "101",
            "District": "Bhubaneswar",
            "City": "Bhubaneswar",
            "Street": "MG Road",
            "First Generation": { "Grandfather": "୰ Kulamani", "Grandmother": "୰ Rahasa" },
            "Second Generation": { "Father": "୰ Agudhi", "Mother": "୰ Komali" },
			"Third Generation": { "Father": "୰ ୰ Khali", "Mother": "୰ ୰ Netro" },
            "Current Generation": {
                "Father": { "Name": "Sir Dandopani Maharana", "Age": 71, "Job": "କୌଳିକ ବୃତ୍ତି", "Blood_Group": "A+" },
                "Mother": { "Name": "ଶ୍ରୀମତୀ ସୁକାନ୍ତି  ମହାରଣା", "Age": 64, "Job": "ଗୃହିଣୀ", "Blood_Group": "O-" },
                "Children": [
                    {
                        "Name": "ଦିପୁ", "Age": 37, "Occupation": "ବେସରକାରୀ ଚାକିରୀ", "Blood_Group": "B+", "Gender": "Male",
                        "Married": true,
                        "Spouse": { "Name": "ପୂଜା", "Age": 29, "Occupation": "Software Developer", "Blood_Group": "A-" },
                        "Children": [{ "Name": "ଲିକିଲି Das", "Age": 4, "Occupation": "NA", "Blood_Group": "B+", "Gender": "Male" }]
                    },
					{
                        "Name": "ପପୁ", "Age": 35, "Occupation": "ସରକାରୀ ଚାକିରୀ", "Blood_Group": "B+", "Gender": "Male",
                        "Married": true,
                        "Spouse": { "Name": "ପୁଷ୍ପା", "Age": 22, "Occupation": "House Wife", "Blood_Group": "A-" },
                        "Children": [{ "Name": "Tiger Das", "Age": 6, "Occupation": "Student", "Blood_Group": "B+", "Gender": "Male" },
									 { "Name": "Lion Das", "Age": 9, "Occupation": "Student", "Blood_Group": "B+", "Gender": "Female" }]
                    },
                    { "Name": "ଶୁଭଶ୍ରୀ", "Age": 12, "Occupation": "Student", "Blood_Group": "NA", "Gender": "Female", "Married": false },
					{ "Name": "ଶ୍ରୀନିବାସ", "Age": 9, "Occupation": "Student", "Blood_Group": "NA", "Gender": "Female", "Married": false }
					
                ]
            },
            "Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
        },
		{
			"House No": "102",
			"District": "Cuttack",
			"City": "Cuttack",
			"Street": "Gandhi Nagar",
			"First Generation": { "Grandfather": "Mohan Nayak", "Grandmother": "Radha Nayak" },
			"Second Generation": { "Father": "Dinesh Nayak", "Mother": "Kavita Nayak" },
			"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
			"Current Generation": {
				"Father": { "Name": "Anil Nayak", "Age": 50, "Job": "Professor", "Blood_Group": "B+" },
				"Mother": { "Name": "Sangeeta Nayak", "Age": 48, "Job": "Bank Manager", "Blood_Group": "A-" },
				"Children": [
					{
						"Name": "Arjun Nayak", "Age": 25, "Occupation": "Engineer", "Blood_Group": "O+", "Gender": "Male",
						"Married": true,
						"Spouse": { "Name": "Pallavi Nayak", "Age": 23, "Occupation": "Teacher", "Blood_Group": "B+" },
						"Children": [{ "Name": "Rohan Nayak", "Age": 1, "Occupation": "NA", "Blood_Group": "O+", "Gender": "Male" }]
					},
					{ "Name": "Pooja Nayak", "Age": 22, "Occupation": "Student", "Blood_Group": "A-", "Gender": "Female", "Married": false }
				]
			},
			"Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
		},
		{
			"House No": "103",
			"District": "Puri",
			"City": "Puri",
			"Street": "Sea Beach Road",
			"First Generation": { "Grandfather": "Govind Mohanty", "Grandmother": "Lakshmi Mohanty" },
			"Second Generation": { "Father": "Manoj Mohanty", "Mother": "Usha Mohanty" },
			"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
			"Current Generation": {
				"Father": { "Name": "Rajesh Mohanty", "Age": 48, "Job": "Doctor", "Blood_Group": "B+" },
				"Mother": { "Name": "Swati Mohanty", "Age": 45, "Job": "Professor", "Blood_Group": "A-" },
				"Children": [
					{ "Name": "Vikas Mohanty", "Age": 23, "Occupation": "Software Engineer", "Blood_Group": "O+", "Gender": "Male", "Married": false },
					{ "Name": "Sonia Mohanty", "Age": 20, "Occupation": "Student", "Blood_Group": "B-", "Gender": "Female", "Married": false }
				]
			},
			"Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
		},
		{
			"House No": "104",
			"District": "Rourkela",
			"City": "Rourkela",
			"Street": "Steel City Road",
			"First Generation": { "Grandfather": "Bhaskar Mishra", "Grandmother": "Sunanda Mishra" },
			"Second Generation": { "Father": "Sanjay Mishra", "Mother": "Ranjana Mishra" },
			"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
			"Current Generation": {
				"Father": { "Name": "Naveen Mishra", "Age": 42, "Job": "Chartered Accountant", "Blood_Group": "O-" },
				"Mother": { "Name": "Deepa Mishra", "Age": 40, "Job": "Entrepreneur", "Blood_Group": "A+" },
				"Children": [
					{ "Name": "Kunal Mishra", "Age": 18, "Occupation": "Student", "Blood_Group": "AB+", "Gender": "Male", "Married": false },
					{ "Name": "Priya Mishra", "Age": 16, "Occupation": "Student", "Blood_Group": "O-", "Gender": "Female", "Married": false }
				]
			},
			"Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
		},
		
    {
        "House No": "105",
        "District": "Balasore",
        "City": "Balasore",
        "Street": "Station Road",
        "First Generation": { "Grandfather": "Harihar Patra", "Grandmother": "Gita Patra" },
        "Second Generation": { "Father": "Prakash Patra", "Mother": "Lina Patra" },
		"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
        "Current Generation": {
            "Father": { "Name": "Sandeep Patra", "Age": 47, "Job": "Teacher", "Blood_Group": "A+" },
            "Mother": { "Name": "Mina Patra", "Age": 45, "Job": "Nurse", "Blood_Group": "B-" },
            "Children": [
                { "Name": "Ravi Patra", "Age": 22, "Occupation": "Student", "Blood_Group": "O+", "Gender": "Male", "Married": false },
                { "Name": "Sita Patra", "Age": 19, "Occupation": "Student", "Blood_Group": "A-", "Gender": "Female", "Married": false }
            ]
        },
        "Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
    },
    {
        "House No": "106",
        "District": "Sambalpur",
        "City": "Sambalpur",
        "Street": "Vivekananda Marg",
        "First Generation": { "Grandfather": "Niranjan Pradhan", "Grandmother": "Bina Pradhan" },
        "Second Generation": { "Father": "Rajesh Pradhan", "Mother": "Mamata Pradhan" },
		"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
        "Current Generation": {
            "Father": { "Name": "Alok Pradhan", "Age": 50, "Job": "Engineer", "Blood_Group": "B+" },
            "Mother": { "Name": "Smita Pradhan", "Age": 48, "Job": "Housewife", "Blood_Group": "O-" },
            "Children": [
                { "Name": "Anil Pradhan", "Age": 25, "Occupation": "Doctor", "Blood_Group": "A+", "Gender": "Male", "Married": false },
                { "Name": "Rina Pradhan", "Age": 22, "Occupation": "Student", "Blood_Group": "B+", "Gender": "Female", "Married": false }
            ]
        },
        "Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
    },
    {
        "House No": "107",
        "District": "Berhampur",
        "City": "Berhampur",
        "Street": "College Road",
        "First Generation": { "Grandfather": "Kishore Sahu", "Grandmother": "Rita Sahu" },
        "Second Generation": { "Father": "Bikash Sahu", "Mother": "Padmini Sahu" },
		"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
        "Current Generation": {
            "Father": { "Name": "Dipak Sahu", "Age": 52, "Job": "Businessman", "Blood_Group": "AB+" },
            "Mother": { "Name": "Lipika Sahu", "Age": 50, "Job": "Teacher", "Blood_Group": "A-" },
            "Children": [
                { "Name": "Suman Sahu", "Age": 27, "Occupation": "Engineer", "Blood_Group": "B+", "Gender": "Male", "Married": true, "Spouse": { "Name": "Rashmi Sahu", "Age": 26, "Occupation": "Doctor", "Blood_Group": "O+" }, "Children": [{ "Name": "Rishi Sahu", "Age": 3, "Occupation": "NA", "Blood_Group": "B+", "Gender": "Male" }] },
                { "Name": "Priti Sahu", "Age": 24, "Occupation": "Student", "Blood_Group": "A+", "Gender": "Female", "Married": false }
            ]
        },
        "Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
    },
    {
        "House No": "108",
        "District": "Jharsuguda",
        "City": "Jharsuguda",
        "Street": "Airport Road",
        "First Generation": { "Grandfather": "Prafulla Behera", "Grandmother": "Sabita Behera" },
        "Second Generation": { "Father": "Sarat Behera", "Mother": "Kusum Behera" },
		"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
        "Current Generation": {
            "Father": { "Name": "Sushant Behera", "Age": 49, "Job": "Pilot", "Blood_Group": "O+" },
            "Mother": { "Name": "Anita Behera", "Age": 47, "Job": "Air Hostess", "Blood_Group": "B-" },
            "Children": [
                { "Name": "Rohan Behera", "Age": 23, "Occupation": "Student", "Blood_Group": "A+", "Gender": "Male", "Married": false },
                { "Name": "Tina Behera", "Age": 20, "Occupation": "Student", "Blood_Group": "O-", "Gender": "Female", "Married": false }
            ]
        },
        "Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
    },
    {
        "House No": "109",
        "District": "Kendrapara",
        "City": "Kendrapara",
        "Street": "Temple Road",
        "First Generation": { "Grandfather": "Gopal Jena", "Grandmother": "Mina Jena" },
        "Second Generation": { "Father": "Nabin Jena", "Mother": "Sujata Jena" },
		"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
        "Current Generation": {
            "Father": { "Name": "Bibhu Jena", "Age": 51, "Job": "Priest", "Blood_Group": "A+" },
            "Mother": { "Name": "Lata Jena", "Age": 49, "Job": "Housewife", "Blood_Group": "O+" },
            "Children": [
                { "Name": "Suresh Jena", "Age": 26, "Occupation": "Teacher", "Blood_Group": "B+", "Gender": "Male", "Married": true, "Spouse": { "Name": "Rina Jena", "Age": 25, "Occupation": "Nurse", "Blood_Group": "A-" }, "Children": [{ "Name": "Mohan Jena", "Age": 1, "Occupation": "NA", "Blood_Group": "B+", "Gender": "Male" }] },
                { "Name": "Mina Jena", "Age": 23, "Occupation": "Student", "Blood_Group": "O+", "Gender": "Female", "Married": false }
            ]
        },
        "Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
    },
    {
        "House No": "110",
        "District": "Bhadrak",
        "City": "Bhadrak",
        "Street": "Market Road",
        "First Generation": { "Grandfather": "Rabi Das", "Grandmother": "Sulata Das" },
        "Second Generation": { "Father": "Niranjan Das", "Mother": "Bharati Das" },
		"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
        "Current Generation": {
            "Father": { "Name": "Sarat Das", "Age": 53, "Job": "Shopkeeper", "Blood_Group": "B+" },
            "Mother": { "Name": "Manasi Das", "Age": 51, "Job": "Housewife", "Blood_Group": "A-" },
            "Children": [
                { "Name": "Rina Das", "Age": 28, "Occupation": "Banker", "Blood_Group": "O+", "Gender": "Female", "Married": true, "Spouse": { "Name": "Amit Das", "Age": 30, "Occupation": "Engineer", "Blood_Group": "B+" }, "Children": [{ "Name": "Ria Das", "Age": 2, "Occupation": "NA", "Blood_Group": "O+", "Gender": "Female" }] },
                { "Name": "Suman Das", "Age": 25, "Occupation": "Student", "Blood_Group": "A+", "Gender": "Male", "Married": false }
            ]
        },
        "Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
    },
    {
        "House No": "111",
        "District": "Baripada",
        "City": "Baripada",
        "Street": "Forest Road",
        "First Generation": { "Grandfather": "Debendra Mohanta", "Grandmother": "Sabita Mohanta" },
        "Second Generation": { "Father": "Prafulla Mohanta", "Mother": "Kusum Mohanta" },
		"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
        "Current Generation": {
            "Father": { "Name": "Sibani Mohanta", "Age": 54, "Job": "Forest Officer", "Blood_Group": "O+" },
            "Mother": { "Name": "Rina Mohanta", "Age": 52, "Job": "Teacher", "Blood_Group": "B-" },
            "Children": [
                { "Name": "Rakesh Mohanta", "Age": 29, "Occupation": "Engineer", "Blood_Group": "A+", "Gender": "Male", "Married": true, "Spouse": { "Name": "Smita Mohanta", "Age": 27, "Occupation": "Doctor", "Blood_Group": "O+" }, "Children": [{ "Name": "Rohan Mohanta", "Age": 3, "Occupation": "NA", "Blood_Group": "A+", "Gender": "Male" }] },
                { "Name": "Priti Mohanta", "Age": 26, "Occupation": "Student", "Blood_Group": "B+", "Gender": "Female", "Married": false }
            ]
        },
        "Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
    },
    {
        "House No": "112",
        "District": "Dhenkanal",
        "City": "Dhenkanal",
        "Street": "College Road",
        "First Generation": { "Grandfather": "Biswanath Sahoo", "Grandmother": "Sabita Sahoo" },
        "Second Generation": { "Father": "Prafulla Sahoo", "Mother": "Kusum Sahoo" },
		"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
        "Current Generation": {
            "Father": { "Name": "Sibani Sahoo", "Age": 55, "Job": "Professor", "Blood_Group": "A+" },
            "Mother": { "Name": "Rina Sahoo", "Age": 53, "Job": "Housewife", "Blood_Group": "O-" },
            "Children": [
                { "Name": "Rakesh Sahoo", "Age": 30, "Occupation": "Engineer", "Blood_Group": "B+", "Gender": "Male", "Married": true, "Spouse": { "Name": "Smita Sahoo", "Age": 28, "Occupation": "Doctor", "Blood_Group": "A+" }, "Children": [{ "Name": "Rohan Sahoo", "Age": 4, "Occupation": "NA", "Blood_Group": "B+", "Gender": "Male" }] },
                { "Name": "Priti Sahoo", "Age": 27, "Occupation": "Student", "Blood_Group": "O+", "Gender": "Female", "Married": false }
            ]
        },
        "Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
    },
    {
        "House No": "113",
        "District": "Angul",
        "City": "Angul",
        "Street": "Industrial Road",
        "First Generation": { "Grandfather": "Harihar Mohanty", "Grandmother": "Gita Mohanty" },
        "Second Generation": { "Father": "Prakash Mohanty", "Mother": "Lina Mohanty" },
		"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
        "Current Generation": {
            "Father": { "Name": "Sandeep Mohanty", "Age": 56, "Job": "Engineer", "Blood_Group": "B+" },
            "Mother": { "Name": "Mina Mohanty", "Age": 54, "Job": "Housewife", "Blood_Group": "A-" },
            "Children": [
                { "Name": "Ravi Mohanty", "Age": 31, "Occupation": "Doctor", "Blood_Group": "O+", "Gender": "Male", "Married": true, "Spouse": { "Name": "Rashmi Mohanty", "Age": 29, "Occupation": "Teacher", "Blood_Group": "B+" }, "Children": [{ "Name": "Rishi Mohanty", "Age": 5, "Occupation": "NA", "Blood_Group": "O+", "Gender": "Male" }] },
                { "Name": "Sita Mohanty", "Age": 28, "Occupation": "Student", "Blood_Group": "A+", "Gender": "Female", "Married": false }
            ]
        },
        "Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
    },
    {
        "House No": "114",
        "District": "Jajpur",
        "City": "Jajpur",
        "Street": "Temple Road",
        "First Generation": { "Grandfather": "Gopal Das", "Grandmother": "Mina Das" },
        "Second Generation": { "Father": "Nabin Das", "Mother": "Sujata Das" },
		"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
        "Current Generation": {
            "Father": { "Name": "Bibhu Das", "Age": 57, "Job": "Priest", "Blood_Group": "A+" },
            "Mother": { "Name": "Lata Das", "Age": 55, "Job": "Housewife", "Blood_Group": "O+" },
            "Children": [
                { "Name": "Suresh Das", "Age": 32, "Occupation": "Teacher", "Blood_Group": "B+", "Gender": "Male", "Married": true, "Spouse": { "Name": "Rina Das", "Age": 30, "Occupation": "Nurse", "Blood_Group": "A-" }, "Children": [{ "Name": "Mohan Das", "Age": 6, "Occupation": "NA", "Blood_Group": "B+", "Gender": "Male" }] },
                { "Name": "Mina Das", "Age": 29, "Occupation": "Student", "Blood_Group": "O+", "Gender": "Female", "Married": false }
            ]
        },
        "Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
    },
    {
        "House No": "115",
        "District": "Nayagarh",
        "City": "Nayagarh",
        "Street": "Market Road",
        "First Generation": { "Grandfather": "Rabi Das", "Grandmother": "Sulata Das" },
        "Second Generation": { "Father": "Niranjan Das", "Mother": "Bharati Das" },
		"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
        "Current Generation": {
            "Father": { "Name": "Sarat Das", "Age": 58, "Job": "Shopkeeper", "Blood_Group": "B+" },
            "Mother": { "Name": "Manasi Das", "Age": 56, "Job": "Housewife", "Blood_Group": "A-" },
            "Children": [
                { "Name": "Rina Das", "Age": 33, "Occupation": "Banker", "Blood_Group": "O+", "Gender": "Female", "Married": true, "Spouse": { "Name": "Amit Das", "Age": 35, "Occupation": "Engineer", "Blood_Group": "B+" }, "Children": [{ "Name": "Ria Das", "Age": 7, "Occupation": "NA", "Blood_Group": "O+", "Gender": "Female" }] },
                { "Name": "Suman Das", "Age": 30, "Occupation": "Student", "Blood_Group": "A+", "Gender": "Male", "Married": false }
            ]
        },
        "Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
    },
    {
        "House No": "116",
        "District": "Kandhamal",
        "City": "Phulbani",
        "Street": "Forest Road",
        "First Generation": { "Grandfather": "Debendra Mohanta", "Grandmother": "Sabita Mohanta" },
        "Second Generation": { "Father": "Prafulla Mohanta", "Mother": "Kusum Mohanta" },
		"Third Generation": { "Father": "୰ ୰ ଖଲ୍ଲି ମହାରଣା", "Mother": "୰ ୰ ନେତ୍ର ମହାରଣା" },
        "Current Generation": {
            "Father": { "Name": "Sibani Mohanta", "Age": 59, "Job": "Forest Officer", "Blood_Group": "O+" },
            "Mother": { "Name": "Rina Mohanta", "Age": 57, "Job": "Teacher", "Blood_Group": "B-" },
            "Children": [
                { "Name": "Rakesh Mohanta", "Age": 34, "Occupation": "Engineer", "Blood_Group": "A+", "Gender": "Male", "Married": true, "Spouse": { "Name": "Smita Mohanta", "Age": 32, "Occupation": "Doctor", "Blood_Group": "O+" }, "Children": [{ "Name": "Rohan Mohanta", "Age": 8, "Occupation": "NA", "Blood_Group": "A+", "Gender": "Male" }] },
                { "Name": "Priti Mohanta", "Age": 31, "Occupation": "Student", "Blood_Group": "B+", "Gender": "Female", "Married": false }
            ]
        },
        "Taluka": "ମହୁରୀ ତାଲୁକା (ବ୍ରହ୍ମପୁର ମହାନଗର)"
    }
    ];
	
	
    let currentPage = 1;
    const rowsPerPage = 5;

    function displayFamilyData(page) {
        $("#familyTable").empty();
        $("#pagination").empty();

        let start = (page - 1) * rowsPerPage;
        let end = start + rowsPerPage;
        let paginatedData = familyData.slice(start, end);

        paginatedData.forEach(family => {
            let row = `<tr>
                <td>${family["House No"]}</td>
				<td>${family.Taluka}</td>
                <td>${family.District}</td>
                <td>${family.City}</td>
                <td>${family.Street}</td>
                <td> <div class="male"> <i class="fas fa-male male"></i> ${family["First Generation"].Grandfather}</div> <div class="female"><i class="fas fa-female female"></i> ${family["First Generation"].Grandmother}</div></td>
                <td> <div class="male"><i class="fas fa-male male"></i> ${family["Second Generation"].Father} </div> <div class="female"> <i class="fas fa-female female"></i> ${family["Second Generation"].Mother}</td>
				<td> <div class="male"><i class="fas fa-male male"></i> ${family["Third Generation"].Father} </div> <div class="female"> <i class="fas fa-female female"></i> ${family["Third Generation"].Mother}</td>
                <td>
                    <div class="male"><i class="fas fa-male male"></i> ${family["Current Generation"].Father.Name}(${family["Current Generation"].Father.Job})</div> 
                    <div class="female"><i class="fas fa-female female"></i> ${family["Current Generation"].Mother.Name} (${family["Current Generation"].Mother.Job})</div>
                    <span class="expand-btn blink" onclick="toggleChildren('${family["House No"]}')" style="color:#FFA500;">👶 View Children</span>
                    <div id="children-${family["House No"]}" style="display:none; padding-left: 20px;"></div>
                </td>
            </tr>`;

            $("#familyTable").append(row);
        });

        for (let i = 1; i <= Math.ceil(familyData.length / rowsPerPage); i++) {
            $("#pagination").append(`<li class="page-item ${i === page ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>`);
        }
    }

    function toggleChildren(houseNo) {
		let container = document.getElementById(`children-${houseNo}`);
		if (container.style.display === "block") {
			container.style.display = "none";
		} else {
			container.innerHTML = "";
			let family = familyData.find(f => f["House No"] === houseNo);
			if (family) {
				let child_count = 1;
				family["Current Generation"].Children.forEach(child => {
					let genderIcon = child.Gender === "Male" 
						? `<span style="color:blue;">♂️</span>` 
						: `<span style="color:#FC0291;">♀️</span>`;

					let nameColor = child.Gender === "Male" ? "blue" : "#FC0291";
					
					let childInfo = `<p style="color:${nameColor};">${genderIcon} 
						${child_count}.  ${child.Name}
						(${child.Occupation}, ${child.Blood_Group})</p>`;

					if (child.Married) {
						childInfo += `<p>💍<strong style="color:#FC0291;"> Spouse: </strong> 
							${child.Spouse.Name}
							(${child.Spouse.Occupation})</p>`;
					}

					if (child.Children && child.Children.length > 0) {
						childInfo += `<p>&emsp;&emsp;👶 <strong>Grandchildren:</strong></p>`;
						child.Children.forEach(gc => {
							let gcColor = gc.Gender === "Male" ? "blue" : "#FC0291";
							let gcIcon = gc.Gender === "Male" 
								? `<span style="color:blue;">♂️</span>` 
								: `<span style="color:#FC0291;">♀️</span>`;

							childInfo += `<p>&emsp;&emsp;&emsp;&emsp;${gcIcon} 
								<i style="color:${gcColor};">${gc.Name}</i> 
								(${gc.Blood_Group})</p>`;
						});
					}
					child_count++;
					container.innerHTML += childInfo;
				});
			}
			container.style.display = "block";
		}
	}


    function changePage(page) {
		if (event) {
			event.preventDefault(); // Prevent default anchor behavior
		}
        currentPage = page;
        displayFamilyData(page);
    }

    $("#searchBox").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $("#familyTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $(document).ready(function() {
        displayFamilyData(1);
    });
	<!-- To handle image click event -->
	document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', function () {
            document.getElementById('modalImage').src = this.src;
            let myModal = new bootstrap.Modal(document.getElementById('imageModal'));
            myModal.show();
        });
    });
	
	document.addEventListener("DOMContentLoaded", function () {
        const galleryContainer = document.getElementById("imageGallery");
        const imageFolder = "./img/book/";  // Folder containing images
        const totalImages = 29; // Set the total number of images

        for (let i = 1; i <= totalImages; i++) {
            let imgNumber = String(i).padStart(4, '0'); // Ensures filenames match the format (0001, 0002, etc.)
            let imgSrc = `${imageFolder}page-${imgNumber}.jpg`;

            let colDiv = document.createElement("div");
            colDiv.className = "col-md-2 p-2"; // Bootstrap classes

            let imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            imgElement.className = "img-fluid rounded gallery-img";
            imgElement.style.border = "1px solid #670000";
			imgElement.setAttribute("data-bs-toggle", "modal"); // Bootstrap Modal Trigger
            imgElement.setAttribute("data-bs-target", "#imageModal");
			
			// Onclick event to change modal image source
            imgElement.addEventListener("click", function () {
                document.getElementById("modalImage").src = imgSrc;
            });

            colDiv.appendChild(imgElement);
            galleryContainer.appendChild(colDiv);
        }
    });
	
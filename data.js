const women = [
	{
		id: 1,
		name: "Toni Morrison",
		title: "Free and Rebellious Author",
		contribution:
			"Toni Morrison's creative and critical effort aimed to highlight what was omitted in the history of American literature and culture. Her writing deals primarily with notion of blackness and womanhood, exposing the latent racism of the nation. Her most famous book, Beloved, gained international recognition and earned her the Nobel prize for literature in 1993.",
		years: "1931-2019",
		nationality: "American",
		image: "https://i.imgur.com/pDz4n37.jpg",
		quote:
			"If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
	},
	{
		id: 2,
		name: "Alexandria Ocasio-Cortez",
		title: "Politician - the Prodigious Child from the Bronx",
		contribution:
			"Growing up in New York's Bronx, politician Alexandria Ocasio-Cortez has experienced from a young age the city's income inequality, which motivated her to organise her community. She run for office in 2019, becoming the youngest woman ever to be elected in the US Congress.",
		years: "1989",
		nationality: "American",
		image: "https://i.imgur.com/GXO0tdK.jpg",
		quote:
			"The best thing we could do is work as hard as we can for what is right and what is good.",
	},
	{
		id: 3,
		name: "Rita Levi Montalcini",
		title: "Nobel Prize-winning Neurobiologist",
		contribution:
			"In her teenage years, Rita Levi Montalcini considered becoming a writer. The loss of a family friend, though, drove her to study Medicine at the University of Turin. Her father feared that attending college would disrupt her potential to be a wife and a mother, but eventually he supported her daughter's aspirations to become a doctor. Eventually, Levi-Montalcini won the Nobel Prize in 1986 for the discovery of the nerve growth factor (NGF), a neuropeptide that is involved in the maintenance, proliferation and survival of neurons.",
		years: "1909-2012",
		nationality: "Italian",
		image: "https://i.imgur.com/zKnWzw5.jpg",
		quote:
			"My experience in childhood and adolescence of the subordinate role played by the female in a society run entirely by men had convinced me that I was not cut out to be a wife.",
	},
	{
		id: 4,
		name: "Tsai Ing-wen",
		title: "Taiwan's First Female Leader",
		contribution:
			"Tsai Ing-wen is the first women to be elected president of Taiwan, Republic of China, in 2016. She was also re-elected as President with an increased share of the vote in the latest 2020 presidential election. During her first mandate, Tsai endorsed LGBT rights, making Taiwan the first country in Asia to legalise same-sex marriage in 2019.",
		years: "1956",
		nationality: "Taiwanese",
		image: "https://i.imgur.com/WrZ7mlx.jpg",
		quote:
			"In the face of love, everyone is equal. Let everyone have the freedom to love and to pursue their happiness. I am Tsai Ing-wen, and I support marriage equality.",
	},
	{
		id: 5,
		name: "Grace Hopper",
		title: "A Legacy of Innovation in Computer Science",
		contribution:
			"Known as 'Amazing Grace', Grace Hopper was one of the programmers of Harvard Mark I, a general purpose electromechanical computer used during World War II. A pioneer of computer programming, Grace Hopper was the first to devise the theory of machine-independent programming languages.",
		years: "1906-1992",
		nationality: "American",
		image: "https://i.imgur.com/AroyxdJ.jpg",
		quote:
			"If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission.",
	},
	{
		id: 6,
		name: "Simone de Beauvoir",
		title: "Pionneer of Feminist Theory",
		contribution:
			"Simone de Beauvoir's books had a significant influence on both feminist existentialism and feminist theory. The Second Sex, in particular, which deals with woman's oppression, is considered a foundational tract of contemporary feminism. One of her contribution to literature is her memoirs, “Mémoires d’une jeune fille rangée” (1958), which have been described as having a warmth and descriptive power.",
		years: "1908-1986",
		nationality: "French",
		image: "https://i.imgur.com/31Xmfaw.jpg",
		quote: "One is not born a woman, one becomes one.",
	},
	{
		id: 7,
		name: "Maryam Mirzakhani",
		title: "Pioneering Mathematician and Winner of the Fields Medal",
		contribution:
			"A mathematician and a professor of Mathematics at Stanford University, Maryam Mirzakhani's phD solved two unsolvable mathematical problems. In 2014 Mirzakhani was awarded with the Fields Medal, the most prestigious awards in mathematics, becoming the first and only woman to be honored with the award.",
		years: "1977-2017",
		nationality: "Iranian",
		image: "https://i.imgur.com/5y1QSRR.jpg",
		quote:
			"I hope that this award will inspire lots more girls and young women, in this country and around the world, to believe in their own abilities and aim to be the fields medallists of the future.",
	},
	{
		id: 8,
		name: "Kamala Harris",
		title: "From Prosecutor to Politician",
		contribution:
			"Besides being the first female Vice-President, Kamala Harris is also the first African American and first Asian American to be elected vice president of the United States in 2020. Before, Harris was an attorney and served as a Senator of California starting from 2017.",
		years: "1964",
		nationality: "American",
		image: "https://i.imgur.com/QZRpfYK.jpg",
		quote:
			"What I want young women and girls to know is: you are powerful and your voice matters.",
	},
	{
		id: 9,
		name: "Margherita Hack",
		title: "Astrophysicist and Scientific Disseminator",
		contribution:
			"Active also in the social and political field, Margherita Hack has been the first Italian woman to administrate the Trieste Astronomical Observatory from 1964 to 1987. In 1995 an asteroid was named in her honor: the asteroid 8558 Hack.",
		years: "1923-2013",
		nationality: "Italian",
		image: "https://i.imgur.com/0PhZakI.jpg",
		quote:
			"Eva’s only fault has been the one of wanting to know more, to experiment and search with her own sources the laws of the Universe, of her own body and to refuse the teachings from “above”. Eva, basically, represents the curiosity of science against the passive acceptance that belongs to faith.",
	},
	{
		id: 10,
		name: "Samantha Cristoforetti",
		title:
			"Record-holder for the Longest Uninterrupted Spaceflight by a European Astronaut",
		contribution:
			"Samantha Cristoforetti is the first Italian women in space, participating to 2014's European Space Agency expedition. She is scheduled to return to the International Space Station in 2022. She holds the record for the longest uninterrupted spaceflight by a European astronaut (199 days, 16 hours).",
		years: "1977",
		nationality: "Italian",
		image: "https://i.imgur.com/b4cACZY.jpg",
		quote:
			"When you discover new things every minute and your mind is absorbing so many experiences, it feels like time expands.",
	},
	{
		id: 11,
		name: "Katherine Johnson",
		title: "A NASA heroine of the USA",
		contribution:
			"Katherine Johnson's calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights. During her 33-year career at NASA and its predecessor, she earned a reputation for mastering complex manual calculations and helped pioneer the use of computers to perform the tasks. The space agency noted her 'historical role as one of the first African-American women to work as a NASA scientist.",
		years: "1918-2020",
		nationality: "American",
		image: "https://i.imgur.com/6raWJ9y.jpg",
		quote:
			"Take all the courses in your curriculum. Do the research. Ask questions. Find someone doing what you are interested in! Be curious!",
	},
	{
		id: 12,
		name: "Radia Perlman",
		title: "Internet Pioneer",
		contribution: `Radia Perlman invented the spanning tree algorithm and the Spanning Tree Protocol (STP), which are best explained in a poem she wrote:
        Algorhyme
        I think that I shall never see
        A graph more lovely than a tree.
        A tree whose crucial property
        Is loop-free connectivity.
        A tree which must be sure to span
        So packets can reach every LAN.
        First the root must be selected.
        By ID it is elected.
        Least cost paths from root are traced.
        In the tree these paths are placed.
        A mesh is made by folks like me
        Then bridges find a spanning tree.`,
		years: "1951",
		nationality: "American",
		image: "https://i.imgur.com/7aqe5JA.jpg",
		quote: "Start out with finding the right problem to solve.",
	},
	{
		id: 13,
		name: "Aletta Jacobs",
		title: "Physician and Women's Suffrage Activist",
		contribution:
			"Aletta Jacobs was one of the first female physicians in the Netherlands. In 1882, she founded the world's first birth control clinic and was a leader in both the Dutch and international women's movements. She led campaigns aimed at deregulating prostitution, improving women's working conditions, promoting peace and calling for women's right to vote.",
		years: "1854-1929",
		nationality: "Dutch",
		image: "https://i.imgur.com/rfqmCFG.jpg",
		quote:
			"Fortunately I had never doubted my actions; otherwise I might indeed have followed their advice. But I was too deeply influenced by what I had seen and by my belief that this work would benefit humanity.",
	},
	{
		id: 14,
		name: "Dr. Hawa Abdi",
		title: "Somalia’s First Gynaecologist",
		contribution:
			"Affectionately known as Mama Hawa, Dr. Hawa Abdi dedicated her life to providing high-quality healthcare, education, and shelter to vulnerable people, even in times of war and famine. She was Somalia’s first female obstetrician, as well as a lawyer and humanitarian. She created the Dr. Hawa Abdi Hope Village - a community for displaced Somalis with a 400-bed hospital, primary and secondary schools, and an innovative community justice system. Recognized as one of the world's great humanitarians, Dr. Hawa was nominated for the Nobel Peace Prize and earned numerous awards, including the Roosevelt Medal and honorary doctorates from Harvard University and the University of Pennsylvania.",
		years: "1947-2020",
		nationality: "Somali",
		image: "https://i.imgur.com/49kVLEF.jpg",
		quote: "Women can build stability. We can make peace.",
	},
	{
		id: 15,
		name: "Reshma Saujani",
		title: "Education Activist",
		contribution:
			"Reshma Saujani is the author of 'Brave, Not Perfect' and founder of Girls Who Code, the international nonprofit organization working to close the gender gap in technology and change the image of what a computer programmer looks like and does.Reshma’s TED talk, “Teach girls bravery not perfection” has more than four million views and has sparked a worldwide conversation about how we’re raising our girls.",
		years: "1975",
		nationality: "American",
		image: "https://i.imgur.com/PEFn1Ky.jpg",
		quote:
			" Teach one girl how to code, she'll teach four. The replication effect is so powerful.",
	},
	{
		id: 16,
		name: "Alice Catherine Evans",
		title: "The Pioneer of Safe Milk",
		contribution:
			"Alice C. Evans became a researcher at the US Department of Agriculture. She investigated bacteriology in milk and cheese, demonstrating that Bacillus abortus causes the disease Brucellosis (undulant fever or Malta fever) in both cattle and humans. Her landmark discovery found acceptance despite resistance from those who were suspicious of a woman without a doctorate or medical degree.",
		years: "1881-1975",
		nationality: "American",
		image: "https://i.imgur.com/vB2g9H9.jpg",
		quote:
			"In the poverty of your imagination it is easier to believe that the printed word is gospel truth. I went beyond the realms of your perceptions.",
	},
	{
		id: 17,
		name: "Wangari Maathai",
		title: "Mama Trees",
		contribution:
			"'It’s the little things citizens do. That’s what will make the difference. My little thing is planting trees.' Founder of the Green Belt Movement, Wangari Maathai was called Mama Miti, which means Mama Trees, by many people in Kenya, Africa. She was the first African women to win a Nobel Peace Prize in 2004, for her contribution to sustainable development, democracy, and peace. To this day the Green Belt Movement is planting trees and protects the 2nd largest tropical forest in the world.",
		years: "1940-2011",
		nationality: "Kenyan",
		image: "https://i.imgur.com/rLmZgSe.jpg",
		quote:
			"Human rights are not things that are put on the table for people to enjoy. These are things you fight for and then you protect.",
	},
	{
		id: 18,
		name: "Jane Goodall",
		title: "Life-long Observer of Chimpanzees",
		contribution:
			"Jane Goodall is a primatologist most known for her long-term study of wild chimpanzees in Tanzania. The Gombe chimp observation, which Jane began in 1960, is the world’s longest running continuous wildlife research project.  Through her Jane Goodall Institute, she has become equally well known as a conservationist and a champion of human rights.",
		years: "1934",
		nationality: "British",
		image: "https://i.imgur.com/QYkaSZS.jpg",
		quote:
			"What you do makes a difference, and you have to decide what kind of difference you want to make.",
	},
	{
		id: 19,
		name: "Sylvia Earle",
		title: "Explorer of Oceans",
		contribution:
			"Sylvia Earle was the first female chief scientist of the U.S. National Oceanic and Atmospheric Administration, and was named by Time Magazine as its first Hero for the Planet in 1998. She is also part of the group Ocean Elders, which is dedicated to protecting the ocean and its wildlife.",
		years: "1935",
		nationality: "American",
		image: "https://i.imgur.com/Dx2hMbl.jpg",
		quote:
			"I suggest to everyone: Look in the mirror. Ask yourself: Who are you? What are your talents? Use them and do what you love.",
	},
	{
		id: 20,
		name: "Adele Goldberg",
		title: "Co-creator of the Smalltalk System",
		contribution:
			"'Don’t ask whether you can do something, but how to do it.' This quote is from Adele Goldberg, one of the computer science pioneers from Xerox PARC. Along with Alan Kay, she developed Smalltalk. Smalltalk was used to prototype the WIMP (windows, icons, menus, pointers) interface at Xerox PARC, the cornerstone for today’s modern graphical user interfaces.",
		years: "1945",
		nationality: "American",
		image: "https://i.imgur.com/HuH3SVQ.jpg",
		quote: "Don't ask whether you can do something, but how to do it.",
	},
	{
		id: 21,
		name: "Maya Angelou",
		title: "Afro-American Human Rights activist",
		contribution:
			" Mayab Angelou is an American poet, memoirist, and civil rights activist. She authored `I Know Why the Caged Bird Sings`, published in 1969. Her international recognition and acclaim are labeled to many of her autobiographical books. From the age of seventeen, Maya Angelou had to face string of odd jobs.  She was respected not only for being a defender of Black Culture but also as a crusader for women's rights.",
		years: "1928 – 2014",
		nationality: "American",
		image: "https://i.imgur.com/swOmY5l.jpg",
		quote:
			" If you're always trying to be normal, you'll never know how amazing you can be.",
	},
	{
		id: 22,
		name: "Ada Lovelace",
		title: "World’s First Computer Programmer",
		contribution:
			"`That brain of mine is something more than merely mortal, as time will show`. Referred to as 'prophet of the computer age, Ada Lovelace was a brilliant mathematician . Ada Lovelace was the first to write a computer programme, an algorithm to calculate a sequence of Bernoulli numbers, intended to be carried out by Charles Babbage's Analytical Engine. This is a great contribution considering she wrote this algorithm in the year 1842.",
		years: "1815 – 1852",
		nationality: "English",
		image: "https://i.imgur.com/BQNNPlz.jpg",
		quote: "Your best and wisest refuge from all troubles is in your science.",
	},
	{
		id: 23,
		name: "Amelia Earhart",
		title: "First Female Aviator and author",
		contribution:
			"'Women must try to do things as men have tried. When they fail, their failure must be but a challenge to others'. Amelia Eahart was the first woman to fly solo across the Atlantic and the Pacific Ocean in 1928. She set many other records, wrote best-selling books about her flying experiences, and was instrumental in the formation of The Ninety-Nines, an organization for female pilots. Amelia Earhart disppeared during once of her flits on July 2, 1937, and was officially declared dead on January 5, 1939.",
		years: "1897 – 1939",
		nationality: "American",
		image: "https://i.imgur.com/92w687D.jpg",
		quote:
			"Women, like men, should try to do the impossible. And when they fail, their failure should be a challenge to others",
	},
	{
		id: 24,
		name: "Rosalind Franklin",
		title: "Forgotten Pionneer of DNA",
		contribution:
			"Rosalind Franklin was a research associate at King’s College in London who became notable for her work on X-ray diffraction images of DNA which would eventually lead to the discovery of the DNA double helix.",
		years: "1928 – 2014",
		nationality: "English",
		image: "https://i.imgur.com/67JqoVS.jpg",
		quote: "Science and everyday life cannot and should not be separated.",
	},
	{
		id: 25,
		name: "Josephine Butler",
		title:
			"Feminist activist and Reformer for the Welfare of Prostitutes and Other Vulnerable Women",
		contribution:
			"Josephine Butler campaigned for women's suffrage, the right of women to better education, the end of coverture in British law, the abolition of child prostitution, and an end to human trafficking of young women and children into European prostitution.",
		years: "1828 – 1906",
		nationality: "English",
		image: "https://i.imgur.com/oekARR6.jpg",
		quote:
			"It is a fact, that numbers even of moral and religious people have permitted themselves to accept and condone in man what is fiercely condemned in woman.",
	},
	{
		id: 26,
		name: "Peg Hughes",
		title: "First Professional Actress in the Western World",
		contribution:
			"Peg Hughes is often credited as the first professional actress on the English stage on 8 December 1660. During the Renaissance women had been virtually banned from appearing as actresses on the stage. So under a male name and role, leading females worked as professional actresses for centuries!",
		years: "1645 – 1719",

		nationality: "English",
		image: "https://i.imgur.com/GxNVt53.jpg",
		quote:
			"I'm tough, I'm ambitious, and I know exactly what I want. If that makes me a bitch, okay.",
	},
	{
		id: 27,
		name: "Annie Londonderry",
		title: "Adventurer on a Bicycle",
		contribution:
			"Annie Londonderry was first woman to cycle around the world. Her journey began on June 27, 1894. All she took with her was a gun, a change of clothes and some travel books. The challenge started from Boston city all the way to New York, then Ohio. Annie Londonderry then ventured even further, she went through France – Paris Lyon, Marseille. Then onto Alexandria in Egypt, from Israel to Yemen, from Sri Lanka to Singapore, from Vietnam to China. On 24 September 1895, she returned home, having proven herself beyond anybody's expectation.",
		years: "1870 – 1947",
		nationality: "Latvian",
		image: "https://i.imgur.com/Zbbz7Kh.jpg",
		quote:
			"I am a journalist and 'a new woman' if that term means that I believe I can do anything that any man can do.",
	},
	{
		id: 28,
		name: "Junko Tabei",
		title: "The first Woman to Conquer Mount Everest",
		contribution:
			"Junko Tabei was the first woman to scale Mount Everest, on May 16, 1975. During 1990–91, Tabei reached the summit of Mt. Vinson, Antarctica's highest mountain.",
		years: "1939 – 2019",
		nationality: "Japanese",
		image: "https://i.imgur.com/KGB6BYi.jpg",
		quote:
			"Technique and ability alone do not get you to the top; it is the willpower that is most important.",
	},
	{
		id: 29,
		name: "Billie Holiday",
		title: "Lady Day",
		contribution:
			"Billie Holiday had an innovative influence on jazz music. Her vocal style, strongly inspired by jazz instrumentalists, pioneered a new way of manipulating phrasing and tempo that would lead to the pop music genre. She was also famous for her vocal delivery and improvisational skills.",
		years: "1915 – 1959",
		nationality: "American",
		image: "https://i.imgur.com/2Cagwj7.jpg",
		quote:
			"If you copy, it means you're working without any real feeling. No two people on earth are alike.",
	},
	{
		id: 30,
		name: "Jeanne Paquin",
		title: "Leading French Fashion Designer",
		contribution:
			"Jeanne Paquin was a leading French fashion designer, known for her resolutely modern and innovative designs. She was the first major female couturier and one of the pioneers of the modern fashion business.",
		years: "1869–1936",
		nationality: "French",
		image: "https://i.imgur.com/rrHNwSt.jpg",
		quote:
			"I get inspiration everywhere. When I am travelling or walking in the street, when I see a sunset with beautiful blendings of color, I often get an inspiration that helps me to evolve[...]",
	},
	{
		id: 31,
		name: "Frida Kahlo",
		title: "Rebel Artist, Mexican Legend",
		contribution:
			"Inspired by her country's popular culture, Frida Kahlo employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.",
		years: "1907-1954",
		nationality: "Mexican",
		image: "https://i.imgur.com/WGYlUKw.jpg",
		quote:
			"I think that little by little I'll be able to solve my problems and survive.",
	},
	{
		id: 32,
		name: "Marie Curie",
		title: "A Woman Dedicated to Science",
		contribution:
			"Marie Curie was a pioneering scientist in radioactivity. She was the first woman to win a Nobel Prize, the first and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two scientific fields.",
		years: "1867-1934",
		nationality: "Polish",
		image: "https://i.imgur.com/Dz4lQaZ.jpg",
		quote: "Nothing in life is to be feared; it is only to be understood.",
	},
	{
		id: 33,
		name: "Virginia Woolf",
		title: "Writer, Savant, Philosopher",
		contribution:
			"Virginia Woolf was considered one of the most important modernist 20th-century authors. She was also a pioneer in the use of stream of consciousness as a narrative device.",
		years: "1982-1941",
		nationality: "English",
		image: "https://i.imgur.com/5Imnvoq.jpg",
		quote:
			"I would venture to guess that Anon, who wrote so many poems without signing them, was often a woman.",
	},
	{
		id: 34,
		name: "Artemisia Gentileschi",
		title: "First Feminist Icon in Western History",
		contribution:
			"In an era when women had few opportunities to pursue artistic training or work as professional artists, Artemisia Gentileschi was the first woman to become a member of the Accademia di Arte del Disegno in Florence.",
		years: "1593-1656",
		nationality: "Italian",
		image: "https://i.imgur.com/aBipi2M.jpg",
		quote: "My mustrious lordship, I'll show you what a woman can do.",
	},
	{
		id: 35,
		name: "Chimamanda Ngozi Adichie",
		title: "Writer and Feminist Icon",
		contribution:
			"Chimamanda Ngozi Adichie has helped inspire new, cross-generational communication about the Biafran war. She seeks to instill dignity into the finest details of each character in her books, whether poor, middle class or rich.",
		years: "1977",
		nationality: "Nigerian",
		image: "https://i.imgur.com/p4bVRXo.jpg",
		quote:
			"You must never behave as if your life belongs to a man.[•••] “Your life belongs to you and you alone.",
	},
	{
		id: 36,
		name: "Margaret Thatcher",
		title: "First Female Prime Minister of the United Kingdom",
		contribution:
			"Margaret Thatcher was the longest-serving British prime minister of the 20th century, and the first woman to hold that office.",
		years: "1920-2013",
		nationality: "English",
		image: "https://i.imgur.com/lP7y4Lk.jpg",
		quote:
			"What is success? I think it is a mixture of having a flair for the thing that you are doing; knowing that it is not enough, that you have got to have hard work and a certain sense of purpose.",
	},
	{
		id: 37,
		name: "Margaret Hamilton",
		title: "Computer Scientist and Systems Engineer",
		contribution:
			"Margaret Hamilton was director of the Software Engineering Division of the MIT Instrumentation Laboratory, which developed on-board flight software for NASA's Apollo program. She founded Higher Order Software in 1976 and Hamilton Technologies in 1986",
		years: "1936",
		nationality: "American",
		image: "https://i.imgur.com/JqlpTbG.jpg",
		quote:
			"Looking back, we were the luckiest people in the world. There was no choice but to be pioneers; no time to be beginners.",
	},
	{
		id: 38,
		name: "Maria Montessori",
		title:
			"Creator of the Montessori Method and First Italian Woman to Ever receive a Degree in Medicine.",
		contribution:
			"Maria Montessori is best known for the philosophy of education that bears her name, and her writing on scientific pedagogy. Her educational method is still in use today in many public and private schools all around the world.",
		years: "1870-1952",
		nationality: "Italian",
		image: "https://i.imgur.com/FqNW7am.jpg",
		quote:
			"The satisfaction which they find in their work has given them a grace and ease like that which comes from music.",
	},
	{
		id: 40,
		name: "Audre Lorde",
		title: "Author and Creator of the 'Theory of Difference'",
		contribution:
			"Audre Lorde explored female identity and life as a Black lesbian. She mainly wrote about issues that affected women across the country during the height Civil Rights movement. All of her work is based on her 'theory of difference', which we refer to as 'intersectionality' today.",
		years: "1934-1992",
		nationality: "American",
		image: "https://i.imgur.com/FRWTTzv.jpg",
		quote:
			"It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences.",
	},
	{
		id: 41,
		name: "Mae Jemison",
		title: "First Afro-American Astronaut in Space",
		contribution:
			"In addition to being the first Black woman to travel into space aboard in the space shuttle Endeavour, Mae Jemison was the first Black woman to be admitted to the NASA astronaut training program. After her career with NASA, she founded a consulting firm she named The Jemison Group Inc., which focuses on sociocultural issues in the STEM field and now holds 10 honorary doctorates.",
		years: "1956",
		nationality: "American",
		image: "https://i.imgur.com/VkYWvLz.jpg",
		quote:
			"Never limit yourself because of others' limited imagination; never limit others because of your own limited imagination.",
	},
	{
		id: 42,
		name: "Lise Meitner",
		title: "The Mother of Nuclear Power",
		contribution:
			"Lise Meitner is the Austrian Swedish physicist who co-discovered nuclear fission. Her partner, chemist Otto Hahn, was awarded a Nobel Prize for such findings and Meitner’s missed recognition is widely known as the “Nobel Mistake”. She also discovered the element protactinium and had an element named after her posthumously.",
		years: "1878-1968",
		nationality: "Austrian",
		image: "https://i.imgur.com/SieZWkf.jpg",
		quote: "Life need not be easy, provided only that it is not empty.",
	},
	{
		id: 43,
		name: "Gloria Steinem",
		title: "Feminist Icon",
		contribution:
			"In 1969, Gloria Steinem published an article, 'After Black Power, Women's Liberation', which brought her to national fame as a feminist leader. In 1971, she co-founded the National Women's Political Caucus which provides training and support for women who seek elected and appointed offices in government. Also in 1971, she co-founded the Women's Action Alliance which, until 1997, provided support to a network of feminist activists and worked to advance feminist causes and legislation. In the 1990s, Steinem helped establish 'Take Our Daughters to Work Day', an occasion for young girls to learn about future career opportunities.",
		years: "1934",
		nationality: "American",
		image: "https://i.imgur.com/JihlvUZ.jpg",
		quote:
			"Don't think about making women fit the world‬— ‪think about making the world fit women.",
	},
	{
		id: 44,
		name: "Rachel Levine",
		title: "First Transgender Woman to Hold Senate-confirmed Office",
		contribution:
			"Rachel Leland Levine is an American pediatrician who has been the United States assistant secretary for health since March 26, 2021. She is a professor of pediatrics and psychiatry at the Penn State College of Medicine, and previously served as the Pennsylvania physician general from 2015 to 2017. She is one of only a few openly transgender government officials in the United States, and is the first to hold an office that requires Senate confirmation.",
		years: "1957",
		nationality: "American",
		image: "https://i.imgur.com/DkXfYjb.jpg",
		quote:
			"We have made so much progress, but we still have a long way to go in terms of true fairness and equality for sexual and gender minorities.",
	},
];
module.exports = women;

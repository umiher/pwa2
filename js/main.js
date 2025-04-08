window.addEventListener("load", function(){
	let header=document.querySelector("#header");
	let menuArea=header.firstElementChild; // #header .menu_zone
	let gnb=menuArea.querySelector("#gnb"); // #header .menu_zone #gnb
	let gnbList=gnb.querySelectorAll("li"); // #header .menu_zone #gnb li

	let mobile=menuArea.querySelector(".mobile"); // #header .menu_zone .mobile
	let mobileGnb=mobile.querySelector("#m_gnb"); // #header .menu_zone .mobile #m_gnb
	let mobileGnbList=mobile.querySelectorAll("li"); // #header .menu_zone .mobile #m_gnb li

	let tab=menuArea.querySelector(".tab");
	let dim=menuArea.querySelector(".dim");
	let btnTop=document.querySelector(".btn_top");

	let section=this.document.querySelectorAll("section");

	let pageList=[header];

	section.forEach(function(item){
		pageList.push(item);
	});

	// console.log(pageList);

	function controlMenu(n){
		// console.log(n);

		gnbList.forEach(function(item, i){
			if(i == n){
				gnbList[i].classList.add("active");
			}
			else{
				gnbList[i].classList.remove("active");
			}
		});

		if(n != 0){
			menuArea.classList.add("fixed");
			btnTop.classList.add("active");
		}
		else{
			menuArea.classList.remove("fixed");
			btnTop.classList.remove("active");
		}
	}

	pageList.forEach(function(item, i){
		gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: "top center",
				end: "bottom 20%",
				onEnter: function(){
					// console.log("enter");

					controlMenu(i);
				},
				onEnterBack: function(){
					// console.log("enter back");

					controlMenu(i);
				}
			}
		});
	});

	tab.addEventListener("click", function(e){
		e.preventDefault();

		tab.classList.toggle("active");
		mobile.classList.toggle("active");
		dim.classList.toggle("active");
	});

	let topPos=0;

	window.addEventListener("resize", function(){
		if(window.innerWidth > 720 && tab.classList.contains("active")){
			tab.classList.remove("active");
			mobile.classList.remove("active");
			dim.classList.remove("active");
		}
	});

	gnbList.forEach(function(item, i){
		gnbList[i].addEventListener("click", function(e){
			e.preventDefault();

			topPos=pageList[i].offsetTop;

			// console.log(topPos);

			gsap.to(window, { scrollTo: topPos, duration: 0.4 });
		});

		mobileGnbList[i].addEventListener("click", function(e){
			e.preventDefault();

			topPos=pageList[i].offsetTop;

			gsap.to(window, { scrollTo: topPos, duration: 0.4, onComplete: function(){
				tab.classList.remove("active");
				mobile.classList.remove("active");
				dim.classList.remove("active");
			}});
		});
	});

	btnTop.addEventListener("click", function(e){
		e.preventDefault();

		gsap.to(window, { scrollTo: 0, duration: 0.4 });
	})

	// 1) start animation
	// 1-1) single animation
	/*
	gsap.fromTo(".text_zone p", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });

	gsap.fromTo(".text_zone h2", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.6 });

	gsap.fromTo(".text_zone .more", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 1.2 });
	*/

	// 1-2) single animation
	/*
	gsap.from(".text_zone p", { y: 30, opacity: 0, duration: 0.6 });

	gsap.from(".text_zone h2", { y: 30, opacity: 0, duration: 0.6, delay: 0.6 });

	gsap.from(".text_zone .more", { y: 30, opacity: 0, duration: 0.6, delay: 1.2 });
	*/

	// 1-3) timeline animation
	const startTl=gsap.timeline();

	startTl.from(".text_zone p", { y: 30, opacity: 0, duration: 0.6 });

	startTl.from(".text_zone h2", { y: 30, opacity: 0, duration: 0.6 });

	startTl.from(".text_zone .more", { y: 30, opacity: 0, duration: 0.6 });

	// 2) business animation
	let businessList=document.querySelectorAll("#business li");

	// 2-1) single animation
	/*
	businessList.forEach(function(item, i){
		if(i%2 == 1){
			gsap.from(item, { y: 100, opacity: 0, duration: 0.5,
				scrollTrigger: {
					trigger: "#business",
					start: "top center",
					end: "bottom 20%"
				}
			});
		}
		else{
			gsap.from(item, { y: -100, opacity: 0, duration: 0.5,
				scrollTrigger: {
					trigger: "#business",
					start: "top center",
					end: "bottom 20%"
				}
			});
		}
	});
	*/

	// 2-2) timeline animation
	const businessTl=gsap.timeline({
		scrollTrigger: {
			trigger: "#business",
			start: "top center",
			end: "bottom 20%"
		}
	});

	// businessTl.from(businessList, { y: 100, opacity: 0, duration: 0.5, stagger: 0.5 });

	businessList.forEach(function(item, i){
		if(i%2 == 1){
			businessTl.from(item, { y: 100, opacity: 0, duration: 0.5 });
		}
		else{
			businessTl.from(item, { y: -100, opacity: 0, duration: 0.5 });
		}
	});

	// 3) portfolio animation
	let portfolioList=document.querySelectorAll("#portfolio li");

	// 3-1) timeline animation
	/*
	const portfolioTl=gsap.timeline({
		scrollTrigger: {
			trigger: "#portfolio",
			start: "top center",
			end: "bottom 20%"
		}
	});

	portfolioTl.from(portfolioList, { y: 100, opacity: 0, duration: 0.5, stagger: 0.5 });
	*/

	// 3-2) single animation
	gsap.from(portfolioList, { y: 100, opacity: 0, duration: 0.5, stagger: 0.5,
		scrollTrigger: {
			trigger: "#portfolio",
			start: "top center",
			end: "bottom 20%"
		}
	});

	// 4) service animation
	// 4-1) timeline animation
	let serviceList=document.querySelectorAll("#service li");
	let serviceListLine=document.querySelectorAll("#service li .line");

	const serviceTl=gsap.timeline({
		scrollTrigger: {
			trigger: "#service",
			start: "top center",
			end: "bottom 20%"
		}
	});

	let device;
	let decoLineHeight;
	let serviceAnimationFlag=false;

	function decoLineFunction(){
		if(window.innerWidth > 980){
			if(device == "pc") return;

			device="pc";
			decoLineHeight=95;
		}
		else{
			if(device == "mobile") return;

			device="mobile";
			decoLineHeight=20;
		}

		// console.log(decoLineHeight);

		if(serviceAnimationFlag == true){
			serviceListLine.forEach(function(item){
				gsap.to(item, { height: decoLineHeight, duration: 0.5 });
			});
		}
	}

	decoLineFunction();

	window.addEventListener("resize", decoLineFunction);

	serviceList.forEach(function(item, i){
		if(i%2 == 1){
			serviceTl.from(item, { x: 50, opacity: 0, duration: 0.8 });

			serviceTl.fromTo(item.querySelector(".line"), { height: 0 }, { height: decoLineHeight, duration: 0.4, onComplete: function(){
				if(i == serviceList.length-1){
					serviceAnimationFlag=true;
				}
			}});
		}
		else{
			serviceTl.from(item, { x: -50, opacity: 0, duration: 0.8 });

			serviceTl.fromTo(item.querySelector(".line"), { height: 0 }, { height: decoLineHeight, duration: 0.4 });
		}
	});

	// 5) contact animation
	// 5-1) timeline animation
	const contactTl=gsap.timeline({
		scrollTrigger: {
			trigger: "#contact",
			start: "top 80%",
			end: "bottom 20%"
		}
	});

	contactTl.from("#contact input[id=name]", { y: 20, opacity: 0, duration: 0.4 });

	contactTl.from("#contact input[id=email]", { y: 20, opacity: 0, duration: 0.4 });

	contactTl.from("#contact input[id=subject]", { y: 20, opacity: 0, duration: 0.4 });

	contactTl.from("#contact textarea", { y: 20, opacity: 0, duration: 0.4 });

	contactTl.from("#contact input[type=submit]", { y: 20, opacity: 0, duration: 0.4 });
});
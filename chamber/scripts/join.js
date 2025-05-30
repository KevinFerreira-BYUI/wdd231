document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const toggleBtn = document.getElementById("menu-toggle");
const menuNav = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
	menuNav.classList.toggle("open");
	toggleBtn.classList.toggle("open");
});

window.addEventListener("load", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".menu a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
});

const nonLevelModal = document.getElementById("nonLevelModal");
function displayNonLevelModal(){
	nonLevelModal.innerHTML = `
		<button class="closeNonModal">✖</button>
		<div class="modal-content">
			<h1 class="modal-heading">For NGOs, associations, and nonprofit organizations.</h1>
			<h2>Benefits</h2>
			<p>- Waived or discounted membership fee.</p>
			<p>- Free participation in community events.</p>
			<p>- Promotion of social campaigns.</p>
			<p>- Access to institutional support from the Chamber.</p>
			<p>- Networking with businesses interested in social initiatives.</p>
		</div>
	`;

	const closeModal = document.querySelector(".closeNonModal");
	closeModal.addEventListener("click", () => {
		nonLevelModal.close();
	});

	const nonLevelBtn = document.getElementById("nonLevel");
	nonLevelBtn.addEventListener("click", () => {
		nonLevelModal.showModal();
	});
}

const bronzeLevelModal = document.getElementById("bronzeLevelModal");
function displayBronzeLevelModal(){
	bronzeLevelModal.innerHTML = `
		<button class="closeBronzeModal">✖</button>
		<div class="modal-content">
			<h1 class="modal-heading">Ideal for small businesses that are starting out or looking for basic visibility.</h1>
			<h2>Benefits</h2>
			<p>- Listing in the member directory.</p>
			<p>- Access to networking events.</p>
			<p>- Monthly newsletter subscription.</p>
			<p>- Discounts on workshops and seminars.</p>
			<p>- Basic promotion on the Chamber’s social media.</p>
		</div>
	`;

	const closeModal = document.querySelector(".closeBronzeModal");
	closeModal.addEventListener("click", () => {
		bronzeLevelModal.close();
	});

	const bronzeLevelBtn = document.getElementById("bronzeLevel");
	bronzeLevelBtn.addEventListener("click", () => {
		bronzeLevelModal.showModal();
	});
}

const silverLevelModal = document.getElementById("silverLevelModal");
function displaySilverLevelModal(){
	silverLevelModal.innerHTML = `
		<button class="closeSilverModal">✖</button>
		<div class="modal-content">
			<h1 class="modal-heading">Perfect for growing companies seeking more visibility and partnership opportunities.</h1>
			<h2>Benefits</h2>
			<p>- All Bronze benefits included.</p>
			<p>- Featured logo placement on the Chamber’s website.</p>
			<p>- Access to exclusive Silver & Gold member events.</p>
			<p>- Early registration for events and trade fairs.</p>
			<p>- Opportunity to promote special offers in the newsletter.</p>
		</div>
	`;

	const closeModal = document.querySelector(".closeSilverModal");
	closeModal.addEventListener("click", () => {
		silverLevelModal.close();
	});

	const silverLevelBtn = document.getElementById("silverLevel");
	silverLevelBtn.addEventListener("click", () => {
		silverLevelModal.showModal();
	});
}

const goldLevelModal = document.getElementById("goldLevelModal");
function displayGoldLevelModal(){
	goldLevelModal.innerHTML = `
		<button class="closeGoldModal">✖</button>
		<div class="modal-content">
			<h1 class="modal-heading">Designed for established companies that want to lead and stand out in the business community.</h1>
			<h2>Benefits</h2>
			<p>- All Silver benefits included.</p>
			<p>- Space to publish articles on the Chamber’s blog.</p>
			<p>- Participation in advisory committees.</p>
			<p>- Priority access to sponsorships and partnerships.</p>
			<p>- Premium highlight in the directory and on social media.</p>
		</div>
	`;

	const closeModal = document.querySelector(".closeGoldModal");
	closeModal.addEventListener("click", () => {
		goldLevelModal.close();
	});

	const goldLevelBtn = document.getElementById("goldLevel");
	goldLevelBtn.addEventListener("click", () => {
		goldLevelModal.showModal();
	});
}

document.addEventListener("DOMContentLoaded", () => {
  const timestampInput = document.getElementById("timestamp");
  if (timestampInput) {
    const now = new Date().toISOString();
    timestampInput.value = now;
  }
});


displayNonLevelModal();
displayBronzeLevelModal();
displaySilverLevelModal();
displayGoldLevelModal();



// first name, last name, email, mobile number, business name, and current date timestamp from the hidden field
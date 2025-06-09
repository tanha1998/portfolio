document.addEventListener("DOMContentLoaded", function () {
  // --- TRANSLATION DATA ---
  const translations = {
    vi: {
      doc_title: "John Doe - Lập Trình Viên & Nhà Phát Triển Web",
      nav_about: "Giới thiệu",
      nav_skills: "Kỹ năng",
      nav_projects: "Dự án",
      nav_contact: "Liên hệ",
      hero_subtitle:
        "Lập trình viên Full-stack chuyên xây dựng các ứng dụng web hiệu suất cao.",
      contact_info_address: "TP. Hồ Chí Minh, Việt Nam",
      about_title: 'Về <span class="text-gradient">Bản Thân</span>',
      about_p1:
        "Xin chào! Tôi là John Doe, một lập trình viên đam mê biến những ý tưởng phức tạp thành các giải pháp web thanh lịch và hiệu quả. Với kinh nghiệm trong cả front-end và back-end, tôi luôn khao khát học hỏi công nghệ mới và đóng góp cho các dự án có ý nghĩa.",
      about_p2:
        "Mục tiêu của tôi là sử dụng kỹ năng của mình để tạo ra những sản phẩm không chỉ tốt về mặt kỹ thuật mà còn mang lại trải nghiệm tuyệt vời cho người dùng.",
      skills_title: 'Bộ <span class="text-gradient">Kỹ Năng</span>',
      projects_title: 'Dự Án <span class="text-gradient">Nổi Bật</span>',
      project1_title: "Sàn Thương Mại Điện Tử",
      project1_desc:
        "Một trang web e-commerce đầy đủ chức năng xây dựng bằng MERN stack, hỗ trợ tìm kiếm sản phẩm, giỏ hàng và thanh toán qua Stripe.",
      project_live_demo: "Live Demo",
      project2_title: "Ứng Dụng Quản Lý Công Việc",
      project2_desc:
        "Ứng dụng quản lý công việc đáp ứng nhanh, xây dựng bằng React và Firebase, giúp người dùng sắp xếp công việc hàng ngày một cách trực quan.",
      project3_title: "Trang Blog Cá Nhân",
      project3_desc:
        "Một blog cá nhân được xây dựng bằng Next.js và Markdown, tối ưu hóa cho SEO và tốc độ tải trang.",
      project4_title: "API Dịch Vụ Thời Tiết",
      project4_desc:
        "Một RESTful API được xây dựng bằng Python (FastAPI) cung cấp dữ liệu thời tiết thời gian thực từ các nguồn bên ngoài.",
      contact_title: 'Liên Hệ <span class="text-gradient">Với Tôi</span>',
      contact_subtitle:
        "Nếu bạn có một dự án hoặc một cơ hội, đừng ngần ngại gửi tin nhắn cho tôi.",
      form_name_placeholder: "Tên của bạn",
      form_email_placeholder: "Email của bạn",
      form_message_placeholder: "Nội dung tin nhắn...",
      form_submit_button: "Gửi Tin Nhắn",
      form_sending_message: "Đang gửi...",
      form_success_message:
        "Cảm ơn bạn đã gửi tin nhắn! Tôi sẽ sớm liên hệ lại.",
      form_error_message: "Gửi tin nhắn thất bại. Vui lòng thử lại sau.",
      footer_rights: "Mọi quyền được bảo lưu.",
    },
    en: {
      doc_title: "John Doe - Coder & Web Developer",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_contact: "Contact",
      hero_subtitle:
        "Full-stack developer specializing in building high-performance web applications.",
      contact_info_address: "Ho Chi Minh City, Vietnam",
      about_title: 'About <span class="text-gradient">Me</span>',
      about_p1:
        "Hello! I'm John Doe, a passionate developer dedicated to turning complex ideas into elegant and efficient web solutions. With experience in both front-end and back-end, I'm always eager to learn new technologies and contribute to meaningful projects.",
      about_p2:
        "My goal is to use my skills to create products that are not only technically sound but also provide a great user experience.",
      skills_title: 'My <span class="text-gradient">Skillset</span>',
      projects_title: 'Featured <span class="text-gradient">Projects</span>',
      project1_title: "E-commerce Platform",
      project1_desc:
        "A full-featured e-commerce website built with the MERN stack, supporting product search, shopping cart, and Stripe payment integration.",
      project_live_demo: "Live Demo",
      project2_title: "Task Management App",
      project2_desc:
        "A responsive task management application built with React and Firebase, helping users organize their daily tasks intuitively.",
      project3_title: "Personal Blog Site",
      project3_desc:
        "A personal blog built with Next.js and Markdown, optimized for SEO and loading speed.",
      project4_title: "Weather Service API",
      project4_desc:
        "A RESTful API built with Python (FastAPI) that provides real-time weather data from external sources.",
      contact_title: 'Get In <span class="text-gradient">Touch</span>',
      contact_subtitle:
        "If you have a project or an opportunity, don't hesitate to send me a message.",
      form_name_placeholder: "Your Name",
      form_email_placeholder: "Your Email",
      form_message_placeholder: "Your message...",
      form_submit_button: "Send Message",
      form_sending_message: "Sending...",
      form_success_message:
        "Thank you for your message! I will get back to you soon.",
      form_error_message: "Failed to send message. Please try again later.",
      footer_rights: "All rights reserved.",
    },
  };

  const langSwitchers = document.querySelectorAll(".lang-option");
  let currentLang = localStorage.getItem("language") || "vi";

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-lang-key]").forEach((el) => {
      const key = el.getAttribute("data-lang-key");
      const translation = translations[lang][key];
      if (translation !== undefined) {
        if (el.hasAttribute("placeholder")) {
          el.placeholder = translation;
        } else {
          el.innerHTML = translation;
        }
      }
    });

    langSwitchers.forEach((switcher) => {
      if (switcher.getAttribute("data-lang") === lang) {
        switcher.classList.add("active", "font-semibold", "text-blue-400");
        switcher.classList.remove("text-gray-300", "hover:text-white");
      } else {
        switcher.classList.remove("active", "font-semibold", "text-blue-400");
        switcher.classList.add("text-gray-300", "hover:text-white");
      }
    });
  }

  // --- EVENT LISTENERS ---

  langSwitchers.forEach((switcher) => {
    switcher.addEventListener("click", (e) => {
      setLanguage(e.target.getAttribute("data-lang"));
    });
  });

  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.closest("#mobile-menu")) {
        mobileMenu.classList.add("hidden");
      }
      if (document.querySelector(this.getAttribute("href"))) {
        e.preventDefault();
        document
          .querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const typingTextElement = document.getElementById("typing-text");
  typingTextElement.textContent = "";
  const textToType = "John Doe";
  let charIndex = 0;
  function type() {
    if (charIndex < textToType.length) {
      typingTextElement.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(type, 120);
    }
  }
  type();

  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // --- PROJECT SCROLL LOGIC ---
  const projectContainer = document.getElementById("project-scroll-container");
  const scrollLeftBtn = document.getElementById("scroll-left-btn");
  const scrollRightBtn = document.getElementById("scroll-right-btn");

  function checkScrollButtons() {
    if (!projectContainer) return;
    const maxScrollLeft =
      projectContainer.scrollWidth - projectContainer.clientWidth;
    scrollLeftBtn.disabled = projectContainer.scrollLeft <= 0;
    scrollRightBtn.disabled = projectContainer.scrollLeft >= maxScrollLeft - 1; // -1 for precision issues
  }

  if (scrollLeftBtn && scrollRightBtn && projectContainer) {
    scrollLeftBtn.addEventListener("click", () => {
      const cardWidth =
        projectContainer.querySelector(".snap-start").offsetWidth;
      projectContainer.scrollBy({
        left: -(cardWidth + 32),
        behavior: "smooth",
      }); // 32 is the gap
    });

    scrollRightBtn.addEventListener("click", () => {
      const cardWidth =
        projectContainer.querySelector(".snap-start").offsetWidth;
      projectContainer.scrollBy({ left: cardWidth + 32, behavior: "smooth" }); // 32 is the gap
    });

    projectContainer.addEventListener("scroll", checkScrollButtons);
    window.addEventListener("resize", checkScrollButtons);
    checkScrollButtons(); // Initial check
  }

  // --- EMAILJS LOGIC ---
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");
  const submitBtn = document.getElementById("submit-btn");

  // Initialize EmailJS with your Public Key
  // Get your keys from https://dashboard.emailjs.com/admin
  emailjs.init({
    publicKey: "mA08Wu49yBkRg2nDm", // Thay YOUR_PUBLIC_KEY bằng Public Key của bạn
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtnText = submitBtn.querySelector("span");

    // Change button state to "sending"
    submitBtn.disabled = true;
    submitBtnText.textContent = translations[currentLang].form_sending_message;

    // Service ID và Template ID từ tài khoản EmailJS của bạn
    const serviceID = "service_vtccgpz"; // Thay bằng Service ID của bạn
    const templateID = "template_9x426uv"; // Thay bằng Template ID của bạn

    emailjs
      .sendForm(serviceID, templateID, this)
      .then(
        () => {
          formMessage.textContent =
            translations[currentLang].form_success_message;
          formMessage.className = "mt-4 text-center text-green-400";
          contactForm.reset();
        },
        (err) => {
          formMessage.textContent =
            translations[currentLang].form_error_message;
          formMessage.className = "mt-4 text-center text-red-400";
          console.error("EmailJS failed:", JSON.stringify(err));
        }
      )
      .finally(() => {
        // Restore button state
        submitBtn.disabled = false;
        submitBtnText.textContent =
          translations[currentLang].form_submit_button;
      });
  });

  // --- INITIALIZE PAGE ---
  setLanguage(currentLang);
});

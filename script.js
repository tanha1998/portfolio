document.addEventListener("DOMContentLoaded", function () {
  // --- TRANSLATION DATA ---
  const translations = {
    vi: {
      doc_title: "Tấn Hà - Lập Trình Viên & Nhà Phát Triển Web",
      nav_about: "Giới thiệu",
      nav_skills: "Kỹ năng",
      nav_projects: "Dự án",
      nav_contact: "Liên hệ",
      hero_subtitle:
        "Frontend Developer | Angular | React | JavaScript | TypeScript",
      contact_info_address: "TP. Hồ Chí Minh, Việt Nam",
      about_title: 'Về <span class="text-gradient">Bản Thân</span>',
      about_p1:
        "Xin chào! Tôi là Tấn Hà, một Lập trình viên Front-end với hơn 3+ năm kinh nghiệm xây dựng ứng dụng web động và thân thiện với người dùng, bao gồm ứng dụng một trang. Thành thạo HTML, CSS và JavaScript, có nền tảng vững chắc về các framework phổ biến như React, Angular và Vue.js. Kinh nghiệm với TypeScript để nâng cao chất lượng và khả năng bảo trì mã. Có kinh nghiệm làm việc với nền tảng low-code (Unqork). Đã chứng minh khả năng cung cấp thiết kế đáp ứng hiệu suất cao cho các web quản trị cho admin, quảng cáo trực tuyến và tài chính. Mong muốn đóng góp chuyên môn về framework JavaScript và low-code để tạo ra trải nghiệm người dùng hấp dẫn và hiệu quả.",
      about_p2:
        "Mục tiêu của tôi là sử dụng kỹ năng của mình để tạo ra những sản phẩm không chỉ tốt về mặt kỹ thuật mà còn mang lại trải nghiệm tuyệt vời cho người dùng.",
      skills_title: 'Bộ <span class="text-gradient">Kỹ Năng</span>',
      projects_title: 'Dự Án <span class="text-gradient">Nổi Bật</span>',
      project1_title: "LightX",
      project1_desc:
        "LightX tập trung vào việc cung cấp giải pháp quản lý và kiểm soát chiến dịch quảng cáo ngoài trời theo thời gian thực, tận dụng luồng dữ liệu để tối ưu hóa tính linh hoạt và hiệu quả của chiến dịch.",
      project_live_demo: "Live Demo",
      project2_title: "Freekick",
      project2_desc:
        "FreeKick (thuộc Credit Strong và Austin Capital Bank) là một sản phẩm tài chính “set‑it‑and‑forget‑it” được thiết kế nhằm giúp phụ huynh xây dựng lịch sử tín dụng cho con từ sớm, đồng thời bảo vệ danh tính cả gia đình",
      project3_title: "BoatBites",
      project3_desc:
        "BoatBites (BoatBites.app) là một ứng dụng di động chuyên cung cấp dịch vụ giao đồ ăn và nhu yếu phẩm trực tiếp đến tàu xuồng ngoài biển/lagoons/sandbars—không cần cập bến—với khẩu hiệu “Anchor. Order. Enjoy.”",
      project4_title: "Personal Appraisal",
      project4_desc:
        "Ứng dụng đánh giá cá nhân (Personal Appraisal) là một ứng dụng web giúp người dùng theo dõi và đánh giá hiệu suất công việc của mình, cung cấp các báo cáo và phân tích để cải thiện hiệu suất.",
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
      doc_title: "Tấn Hà - Coder & Web Developer",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_contact: "Contact",
      hero_subtitle:
        "Frontend Developer | Angular | React | JavaScript | TypeScript",
      contact_info_address: "Ho Chi Minh City, Vietnam",
      about_title: 'About <span class="text-gradient">Me</span>',
      about_p1:
        "Hello! I'm Ha, Front-end developer with over  3+ years of experience building dynamic and user-friendly web applications, including single-page applications. Proficient in HTML, CSS, and JavaScript, with a strong foundation in popular frameworks like React, Angular, and Vue.js. Experienced with TypeScript for enhanced code quality and maintainability. Skilled in working with low-code platforms (Unqork). Proven ability to deliver high-performance, responsive designs for admin management websites, online advertising, and finance. Eager to contribute expertise in JavaScript frameworks and low-code to create engaging and impactful user experiences.",
      about_p2:
        "My goal is to use my skills to create products that are not only technically sound but also provide a great user experience.",
      skills_title: 'My <span class="text-gradient">Skillset</span>',
      projects_title: 'Featured <span class="text-gradient">Projects</span>',
      project1_title: "LightX",
      project1_desc:
        "LightX focuses on providing real-time management and control solutions for outdoor advertising campaigns, leveraging data streams to optimize campaign flexibility and effectiveness.",
      project_live_demo: "Live Demo",
      project2_title: "Freekick",
      project2_desc:
        "FreeKick (part of Credit Strong and Austin Capital Bank) is a set-it-and-forget-it financial product designed to help parents build credit history for their children early on, while protecting the identity of the entire family.",
      project3_title: "BoatBites",
      project3_desc:
        "BoatBites (BoatBites.app) is a mobile app specializing in delivering food and essential supplies directly to boats offshore/lagoons/sandbars—no docking required—with the slogan “Anchor. Order. Enjoy.”",
      project4_title: "Personal Appraisal",
      project4_desc:
        "Personal Appraisal is a web application that helps users track and evaluate their work performance, providing reports and analytics to improve performance.",
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
  let currentLang = localStorage.getItem("language") || "en";

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
  const textToType = "Tấn Hà";
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

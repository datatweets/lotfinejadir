for (const page of document.querySelectorAll("[data-assessment-token-page]")) {
  const status = page.querySelector("[data-assessment-token-status]");
  const credential = window.__lotfinejadAssessmentCredential;
  if (credential) delete window.__lotfinejadAssessmentCredential;
  if (!status) continue;

  if (credential?.kind === "login") {
    status.textContent = "پیوند ورود پیش از بارگذاری ابزارهای بیرونی از نشانی صفحه پاک شد؛ فضای سازمانی هنوز فعال نیست و هیچ درخواستی ارسال یا ثبت نشد.";
  } else if (credential?.kind === "invitation") {
    status.textContent = "پیوند دعوت پیش از بارگذاری ابزارهای بیرونی از نشانی صفحه پاک شد؛ دعوت در این نسخه پردازش نشد و هیچ پاسخی ثبت نشد.";
  } else {
    status.textContent = "پیوند دعوت یا ورود در نشانی صفحه پیدا نشد؛ ممکن است منقضی شده باشد یا قبلاً مصرف شده باشد.";
  }
}

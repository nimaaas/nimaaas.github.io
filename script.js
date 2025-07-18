const loginForm = document.getElementById('login-form');
const backgroundMusic = document.getElementById('background-music');
const muteButton = document.getElementById('mute-button');
let isMusicPlaying = false;

// پخش آهنگ با کلیک روی دکمه ورود
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // جلوگیری از ارسال فرم

  // دریافت مقادیر نام کاربری و رمز عبور
  const username = loginForm.querySelector('input[type="text"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  // بررسی نام کاربری و رمز عبور
  if (username === 'niloofar' && password === '2004') {
    // ورود موفقیت‌آمیز
    if (!isMusicPlaying) {
      backgroundMusic.play().catch(error => {
        console.log("پخش خودکار موسیقی مسدود شده است: ", error);
      });
      isMusicPlaying = true;
    }
    window.location.href = 'admin.html'; // انتقال به صفحه admin
  } else {
    // ورود ناموفق
    alert('you are not my love , get out ');
  }
});

// کنترل قطع و وصل صدا
muteButton.addEventListener('click', () => {
  if (backgroundMusic.muted) {
    backgroundMusic.muted = false;
    muteButton.innerHTML = '<img src="media/music_icon.png" alt="کنترل صدا">'; // نمایش آیکون فعال
  } else {
    backgroundMusic.muted = true;
    muteButton.innerHTML = '<img src="media/unmute_icon.png" alt="کنترل صدا">'; // نمایش آیکون غیرفعال
  }
});

// اطمینان از پخش آهنگ در صورت تعامل کاربر
document.body.addEventListener('click', () => {
  if (!isMusicPlaying && backgroundMusic.readyState >= 2) { // بررسی اینکه آیا فایل صوتی آماده پخش است
    backgroundMusic.play().catch(error => {
      console.log("پخش موسیقی با کلیک مسدود شده است: ", error);
    });
    isMusicPlaying = true;
  }
}, { once: true }); // فقط یک بار اجرا شود
document.getElementById('play-music').addEventListener('click', () => {
  const audio = document.getElementById('music');
  audio.play();
});

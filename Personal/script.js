const steamCode = "modiGimop1234";

function verifyAccess() {
    Swal.fire({
        title: 'أدخل الكود:',
        input: 'text',
        inputPlaceholder: 'أدخل الكود هنا',
        showCancelButton: true,
        confirmButtonText: 'تأكيد',
        cancelButtonText: 'إلغاء',
        preConfirm: (code) => {
            if (code === steamCode) {
                Swal.fire('نجاح', 'تم فتح حسابات ستيم بنجاح!', 'success');
            } else {
                Swal.fire('خطأ', 'الكود غير صحيح.', 'error');
            }
        }
    });
}

function showGames() {
    document.getElementById('gamesContainer').style.display = 'block';
}

function searchGames() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const games = document.querySelectorAll('.game-item');
    games.forEach(game => {
        const title = game.querySelector('h3').innerText.toLowerCase();
        game.style.display = title.includes(query) ? 'block' : 'none';
    });
}

function showTrailer(gameName, trailerUrl, downloadLink) {
    Swal.fire({
        title: `معاينة اللعبة: ${gameName}`,
        html: `
            <iframe width="100%" height="315" src="${trailerUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <br><br>
            <a href="${downloadLink}" target="_blank" class="btn btn-success" onclick="warnAboutLink(event)">تحميل اللعبة</a>
        `,
        showCloseButton: true
    });
}

function warnAboutLink(event) {
    event.preventDefault();
    const link = event.target.href;
    Swal.fire({
        title: 'تحذير',
        text: 'قد يحتوي الرابط على ملفات تورنت. هل تريد المتابعة؟',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'نعم',
        cancelButtonText: 'إلغاء'
    }).then((result) => {
        if (result.isConfirmed) {
            window.open(link, '_blank');
        }
    });
}

function register() {
    Swal.fire({
        title: 'إنشاء حساب',
        html: `
            <input type="text" id="username" class="swal2-input" placeholder="اسم المستخدم">
            <input type="password" id="password" class="swal2-input" placeholder="كلمة المرور">
        `,
        confirmButtonText: 'تسجيل',
        preConfirm: () => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (!username || !password) {
                Swal.showValidationMessage('جميع الحقول مطلوبة');
            } else {
                return { username, password };
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('تم التسجيل بنجاح!', `مرحبًا بك، ${result.value.username}!`, 'success');
        }
    });
}

function support() {
    Swal.fire({
        title: 'الدعم الفني',
        text: 'للمساعدة، يرجى التواصل معنا على البريد الإلكتروني: support@gamestore.com',
        icon: 'info',
        confirmButtonText: 'حسنًا'
    });
}

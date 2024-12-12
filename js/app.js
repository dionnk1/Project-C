document.getElementById("google-btn").addEventListener('click', () => {
    window.location = 'https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Fpli%3D1&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-434467870%3A1734005781232060&ddm=1';
})

document.getElementById("facebook-btn").addEventListener('click', () => {
    window.location = 'https://www.facebook.com';
})
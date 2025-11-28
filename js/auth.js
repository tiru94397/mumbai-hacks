async function signupWithEmail(name, email, password) {
  try {
    const userCred = await firebase.auth().createUserWithEmailAndPassword(email, password);

    await userCred.user.updateProfile({ displayName: name });

    await firebase.firestore().collection("users").doc(userCred.user.uid).set({
      name,
      email,
      isPremium: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    window.location.href = "chat.html";
  } catch (err) {
    alert(err.message);
  }
}

async function signInWithEmail(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    window.location.href = "chat.html";
  } catch (err) {
    alert(err.message);
  }
}

/* GOOGLE LOGIN */
async function signInWithGoogle() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);

    const uRef = firebase.firestore().collection("users").doc(result.user.uid);
    const doc = await uRef.get();

    if (!doc.exists) {
      await uRef.set({
        name: result.user.displayName || "",
        email: result.user.email,
        isPremium: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }

    window.location.href = "chat.html";
  } catch (err) {
    alert(err.message);
  }
}

function signOutUser() {
  firebase.auth().signOut().then(() => window.location.href = "login.html");
}

function protectPage() {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) window.location.href = "login.html";
  });
}
function redirectIfLoggedIn() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) window.location.href = "chat.html";
  });
}

firebase.auth().onAuthStateChanged(user => {
  const nav = document.querySelector(".nav-right");
  if (!nav) return;

  if (user) {
    nav.innerHTML = `
      <span style="margin-right:12px">Hi, ${user.displayName || user.email}</span>
      <button onclick="signOutUser()" class="login-btn">Logout</button>
    `;
  } else {
    nav.innerHTML = `<a href="login.html" class="login-btn">Login</a>`;
  }
});

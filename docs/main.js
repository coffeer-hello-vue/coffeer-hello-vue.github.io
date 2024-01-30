<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCmE3TkAi9YITe7Bvh8pI6YMD5wXkKE_ks",
    authDomain: "coffeer-vue.firebaseapp.com",
    projectId: "coffeer-vue",
    storageBucket: "coffeer-vue.appspot.com",
    messagingSenderId: "187852067741",
    appId: "1:187852067741:web:1a96566d9b2a8a5275d574",
    measurementId: "G-SSKCHWGNY8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

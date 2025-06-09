const firebaseConfig = {
  apiKey: "AIzaSyDl6e3F_GStFoAvzLQOrj1oly90MuSwqoA",
  authDomain: "myblog-ae4fa.firebaseapp.com",
  projectId: "myblog-ae4fa",
  storageBucket: "myblog-ae4fa.firebasestorage.app",
  messagingSenderId: "762394628579",
  appId: "1:762394628579:web:3a93b32b142053a12e90d6",
  measurementId: "G-THJPQ2EP2R"
};



firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
let currentUser = null;
let isAdmin = false;
const postId = "some-post-id";


db.settings({timestampsInSnapshots: true});

const collection = db.collection('posts');


collection.get().then(snapshot => {

const posts = [];
  snapshot.forEach(doc => {
    let post = {};
    post.title =  doc.data().title
    post.content =  doc.data().content
    post.timestamp = doc.data().timestamp
    posts.push(post);
  });
  let posts_section = document.getElementById("posts");
let _html = ""
posts.forEach(function(post){
     _html += `
    <article><p>${post.title}</P>
    ${post.content}
    </article>
    `
})

document.body.innerHTML = _html;

});

import firebase from 'firebase/app' //firebase全般の機能を利用するために必要
import 'firebase/auth' //ログイン機能を使うために読み込み
import 'firebase/firestore' //データベース機能を使うために読み込み

//firebaseの準備ができている場合のみに設定する
if (!firebase.apps.length) {
 const config = {
    apiKey: "AIzaSyAI-UiRKeFt_AF7WQ0sfRpqVvMzl6iYFgY",
    authDomain: "slack-clone-app-1ce7d.firebaseapp.com",
    databaseURL: "https://slack-clone-app-1ce7d.firebaseio.com",
    projectId: "slack-clone-app-1ce7d",
    storageBucket: "slack-clone-app-1ce7d.appspot.com",
    messagingSenderId: "934874193269"
 }
 firebase.initializeApp(config) //configによってfirebaseの設定を行う
}

const db = firebase.firestore() //データベースを定義
export {
 firebase,
 db
}
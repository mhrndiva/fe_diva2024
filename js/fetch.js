import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-maharani2024-db57da935d66.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}
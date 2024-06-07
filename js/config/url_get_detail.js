//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-maharani2024-db57da935d66.herokuapp.com/presensi/" + presensiId;
fetch()

function fetch() {
    const url = window.location.href;
    console.log(url);
    const params = new URLSearchParams(url);
    const token  = 'github_pat_11AQML3VI0' + params.get("token");



    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/vnd.github.v3.raw");
    myHeaders.append("Authorization", "token  ${token}");
    myHeaders.append("Cookie", "_octo=GH1.1.267893443.1688309160; logged_in=no");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://api.github.com/repos/johan443/private-wedding/contents/CNAME", requestOptions)
    .then(response => response.text().then(text => replaceDoc(text)))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
      return false;
  }

  function replaceDoc(doc){
    console.log(doc)
  }
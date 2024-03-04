function fetchData() {

    fetch('https://bumblebee.hive.swarm.space/hive/login', {
        method:'POST',
        headers: {
            'Content-Type': '',
            'accept': 'application/json',
            'Authorization': 'Bearer eyJraWQiOiJidW1ibGViZWUwIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJvcmciOjY3OTM5LCJyb2xlcyI6WzJdLCJpc3MiOiJTd2FybSBUZWNobm9sb2dpZXMsIEluYy4iLCJ1c2VyIjo1NDg2LCJqdGkiOjcxODI0NTA5MSwidXNlcm5hbWUiOiJJTlRFQ0gifQ.CctIrK3unP7gJkNTB3XgUYofxxRu-6RErWxiY1paMs7ehDlEXy_8v8j2qVTWBLuj9Hg0BHmFdWqoDxkf3XvIkigiqxVmvPF58CgBzV9GFupwx5pMxR2xngCd_wU3R5DdSCIN3aI_9GgA___x-KraKgKo1iEWK0RL0n0afs7R9bQ'
        },
        body: ({
            'username': 'INTECH',
            'password': 'InTechSWARM' 
        })
    })

    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

}
function fetchData() {

    fetch('https://bumblebee.hive.swarm.space/hive/login', {
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accept': 'application/json'
            
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
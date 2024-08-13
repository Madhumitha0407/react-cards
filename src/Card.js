import React from 'react'
const Card = () => {
  return (
   <div className="row">
    <div className="col-12 col-md-4" >
        <div className="card">
            <div className="card-title">
                <h3>Airtel</h3>
            </div><hr/>
            <div className="card-body">
                <img src='https://logos-world.net/wp-content/uploads/2020/11/Airtel-Emblem-700x394.png'/>
            </div>
            <div className="card-footer">
            <img src ="http://ts4.mm.bing.net/th?id=OIP.Mmg3KjhevkKKzjUDsIr8xAHaHa&pid=15.1" />
            <h6>Truly unlimited calls</h6>
            <h5>Rs.859</h5>
            <h6> 2 GB/day - 84 days</h6>
            <button class="btn btn-success btn">pay now</button>
            </div>
        </div>
    </div>
    
    <div className="col-12 col-md-4">
        <div className="card">
            <div className="card-title">
                <h3>BSNL</h3>
            </div><hr/>
            <div className="card-body">
                <img src='https://telecomtalk.info/wp-content/uploads/2014/12/BSNL_Logo.svg_.png'/>
            </div>
            <div className="card-footer">
            <img src ="http://ts4.mm.bing.net/th?id=OIP.Mmg3KjhevkKKzjUDsIr8xAHaHa&pid=15.1" />
            <h6>Truly unlimited calls</h6>
            <h5>Rs.799</h5>
            <h6>1.5 GB/day - 84 days</h6>
            <button class="btn btn-success btn">pay now</button>
            </div>
        </div>
    </div>
    <div className="col-12 col-md-4">
        <div className="card">
            <div className="card-title">
                <h3>Jio</h3>
            </div><hr/>
            <div className="card-body">
                <img src='https://wallpapercave.com/wp/wp3816443.png'/>
               
            </div>
            
            <div className="card-footer">
                <img src ="http://ts4.mm.bing.net/th?id=OIP.Mmg3KjhevkKKzjUDsIr8xAHaHa&pid=15.1" />
                <h6>Truly unlimited calls</h6>
                <h5>Rs.349</h5>
                <h6>2 GB/day - 84 days</h6>
                <button class="btn btn-success btn">pay now</button>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Card
starray = [] ;
function Submit() {
    var name1 = document.getElementById ("st1"). value ;
    var name2 = document.getElementById ("st2"). value ;
    var name3 = document.getElementById ("st3"). value ;
    var name4 = document.getElementById ("st4"). value ;
    var name5 = document.getElementById ("st5"). value ;
    starray.push(name1) ;
    starray.push(name2) ;
    starray.push(name3) ;
    starray.push(name4) ;
    starray.push(name5) ;
    document.getElementById ("output"). innerHTML = starray ;
    document.getElementById ("btnsubmit"). style.display = "none" ; 
    document.getElementById ("btnsorting"). style.display = "inline-block" ; 

    
}

function Sorting() {
    starray.sort() ; 
    document.getElementById ("output"). innerHTML = starray ;
}

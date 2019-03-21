

$(document).ready(function(){
    $.getJSON('/api/bucketLists')
    .then(addBucketLists)

    $("#listInput").keypress(function(event){
        if(event.which ==13){
            createLists()
        }
    });

    $('.list').on('click', 'li', function(){
        updateList($(this));
    })
   $('.list').on('click', 'span', function(event){
        event.stopPropagation();
       removeList($(this).parent())
   })
});


function addBucketLists(bucketLists){
    //add bucketlists
    bucketLists.forEach(function(bucketList){
        addBucketList(bucketList)
        // console.log(bucketList.name)
      })
}

function addBucketList(bucketList){
    var newList =$('<li class ="task">'+bucketList.name+ '<span>X</span>'+'</li>')
    newList.data('id',bucketList._id);
    newList.data('completed', bucketList.completed);
    if(bucketList.completed){
        newList.addClass("done");
    }
    $('.list').append(newList)
}

function createLists(){
    //send post request to creat new list
    var userInput = $("#listInput").val();
    $.post('/api/bucketLists', {name: userInput})
    .then(function(newList){
        $('#listInput').val(' ');
        // console.log(newList);
        addBucketList(newList)
    })
    .catch(function(err){
        console.log(err);
    })

}

function removeList(list){
    var checkedList = list.data('id');
        $.ajax({
            method:'DELETE',
            url: '/api/bucketLists/'+ checkedList
        })
        .then(function(data){
            list.remove();
        })
        .catch(function(err){
            console.log(err);
        })
}

function updateList(list){
var updateUrl = '/api/bucketLists/'+list.data('id')
var isDone = !list.data('completed');
var updateData = {completed: isDone};
$.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
})
.then(function(updatedList){
    list.toggleClass('done');
    list.data('completed', isDone);
})
}
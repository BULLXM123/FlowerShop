;$(function(){
    $.ajax({
        url:"http://localhost:3000/user",
        type:"GET",
        async:false,
        success:function(data){
            data = eval("("+data+")");
            console.log(typeof(data)); //object
            user = [];
            for(var i=0;i<data.length;i++){	
                user.push(data[i]);
                // console.log(data[i]);
                console.log(user);
                
            }
            
        }
    })
    
    $('#login').click(function(){
        window.location.href='login.html'
    var email = $('#inputEmail3').val();
    // console.log(email);
    var password = $('#inputPassword3').val();
    // console.log(password);
     login = false;
    for(let i=0;i<user.length;i++){
        if(email===user[i].email&&password===user[i].password){
            // console.log(user[i].email);
            login = true;
        }
        
    }
    // console.log(login);
        if(login){
            alert('登陆成功！');
            window.location.href="flower.html"
            // $.ajax({
            //     url:'http://localhost:3000/index.html',
            //     type:'POST',
            //     data:{email:$('#inputEmail3').val()},
            //     success:function(data){

            //     }

            // })
        }
        else{
            alert('sorry your information is uncorrect! please try again!');
        }
        
    })

    $('#register').click(function(){
       var class1 = $('#form1').attr('class');
       var class2 = $('#form2').attr('class');
       if((class1.indexOf('has-error'))<0 && (class2.indexOf('has-error')<0 )){
    // console.log(class1);      
         // var email = $('#inputEmail3').val();
        // // console.log(email);
        // var password = $('#inputPassword3').val();
        $.ajax({
            url:'http://localhost:3000/adduser',
            type:'POST',
            data:{email:$('#inputEmail3').val(),password:$('#inputPassword3').val()},
            dataType:'json',
            success:function(data){
                alert("succedd submit!");
            },
            error:function(err){
                console.log(err);
            }

        })
        alert("注册成功！")
        window.location.href='login.html';
    }
    else{
        alert('格式错误，请重新输入');
        window.location.href='login.html';
    }
    })




})

function plyaerAddbyId(elementId){
    const ulList = document.getElementById('players-list')

            // value from 
            const text = document.getElementById(elementId);
            const newText = text.innerText;

            // new item creat 
            const li = document.createElement('li')

            // as a item
            li.innerText = newText;

            // set class of element
            li.classList.add('list');
            
            // new element adding with parent element
            ulList.appendChild(li);

}


        // 1no player selection
        const btn1 = document.getElementById('select-btn1').addEventListener('click',function(){
            plyaerAddbyId('player1')

            if(bt1 === click){
                btn1.setAttribute('disabled', true)
            }
            


    
        
        })

        // 2no player selection
        document.getElementById('select-btn2').addEventListener('click',function(){
            plyaerAddbyId('player2')
        })

        // 3no player selection
        document.getElementById('select-btn3').addEventListener('click',function(){
            plyaerAddbyId('player3')
        })

        // 4no player selection
        document.getElementById('select-btn4').addEventListener('click',function(){
            plyaerAddbyId('player4')
        })

        // 5no player selection
        document.getElementById('select-btn5').addEventListener('click',function(){
            plyaerAddbyId('player5')
        })

        // 6no player selection
        document.getElementById('select-btn6').addEventListener('click',function(){
        plyaerAddbyId('player6')
        })

        

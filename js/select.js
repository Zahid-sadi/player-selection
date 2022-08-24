
function playerAddById(elementId, buttonSelect){
    const ulList = document.getElementById('players-list')
    const text = document.getElementById(elementId);
    const newText = text.innerText;
            /* if (ulList.lastChild.text === newText) {

            } */

            if (ulList.getElementsByTagName('li').length > 4 ) {
                alert('Select only 5 players');
            }
            else {
            // new item creat 
            const li = document.createElement('li')

            // as a item
            li.innerText = newText;

            // set class of element
            li.classList.add('list');
            
            // new element adding with parent element
            ulList.appendChild(li);


            /* disable btn added after clickd */
            document.getElementById(buttonSelect).disabled = true;

            }
}


        // 1no player selection
        document.getElementById('select-btn1').addEventListener('click',function(){
            playerAddById('player1', 'select-btn1')
    
        })

        // 2no player selection
        document.getElementById('select-btn2').addEventListener('click',function(){
            playerAddById('player2', 'select-btn2')
        })

        // 3no player selection
        document.getElementById('select-btn3').addEventListener('click',function(){
            playerAddById('player3', 'select-btn3')
        })

        // 4no player selection
        document.getElementById('select-btn4').addEventListener('click',function(){
            playerAddById('player4', 'select-btn4')
        })

        // 5no player selection
        document.getElementById('select-btn5').addEventListener('click',function(){
            playerAddById('player5', 'select-btn5')
        })

        // 6no player selection
        document.getElementById('select-btn6').addEventListener('click',function(){
        playerAddById('player6', 'select-btn6')
        })

        

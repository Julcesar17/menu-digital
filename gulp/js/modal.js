setTimeout(() => {
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('modalClose');
    const option = document.querySelectorAll('.option a');

    function fillDataModal(name,description,price,srcImage){
        let image = new Image();
        image.src = srcImage;
        document.getElementById('name').innerText = name;
        document.getElementById('description').innerText = description;
        document.getElementById('price').innerText = price;
        document.getElementById('image').appendChild(image);
    }

    function removeDataModal(){
        document.getElementById('name').innerText = '';
        document.getElementById('description').innerText = '';
        document.getElementById('price').innerText = '';
        document.getElementById('image').innerHTML = '';
    }

    [].forEach.call(option, op => {
        op.addEventListener('click', (e)=>{
            e.preventDefault();
            let name = op.dataset.name;
            let description = op.dataset.description;
            let price = op.dataset.price;
            let tagImage = op.getElementsByTagName('img');
            let srcImage = tagImage[0].currentSrc;
            fillDataModal(name,description,price,srcImage)
            modal.classList.add("show");
        }, false);
    });

    if(option.length > 0){
        closeModal.addEventListener('click', () => {
            modal.classList.remove("show");
            removeDataModal();
        });
    }

}, 0);
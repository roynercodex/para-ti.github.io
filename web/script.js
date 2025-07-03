    let currentPage = 1;
    const totalPages = 5;

    function Nextpage() {
        // Oculta todas las páginas
        for (let i = 1; i <= totalPages; i++) {
            document.getElementById(`page${i}`).classList.remove('active');
        }

        // Calcula la siguiente página
        currentPage = currentPage % totalPages + 1;

        // Muestra la nueva página actual
        document.getElementById(`page${currentPage}`).classList.add('active');
    }

    function restart() {
        // Oculta todas las páginas
        for (let i = 1; i <= totalPages; i++) {
            document.getElementById(`page${i}`).classList.remove('active');
        }

        // Muestra la primera página
        currentPage = 1;
        document.getElementById(`page${currentPage}`).classList.add('active');
    }
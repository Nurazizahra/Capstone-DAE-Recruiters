class Sidebar extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('template');
        template.innerHTML = `   
            <ul>
                <li><a href="#/dashboard" class="menu-item" data-route="dashboard"><i class="fas fa-tachometer-alt"></i> Dashboard</a></li>
                <li><a href="#/buatloker" class="menu-item" data-route="buatloker"><i class="fas fa-plus"></i> Buat Lowongan Baru</a></li>
                <li><a href="#/manajemenloker" class="menu-item" data-route="manajemenloker"><i class="fas fa-tasks"></i> Manajemen Lowongan</a></li>
                <li><a href="#/kelolaakun" class="menu-item" data-route="kelolaakun"><i class="fas fa-user-cog"></i> Kelola Akun</a></li>
            </ul>
        `;

        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('custom-sidebar', Sidebar);

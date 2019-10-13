<template>
    <!-- Sidebar Holder -->
    <nav id="sidebar">
        <div class="sidebar-header">
            <img src="https://lancer-app.000webhostapp.com/images/svg/Lancers.svg" height="35" width="auto" class="img img-responsive">
        </div>
        <ul class="list-unstyled components">
            <li class="active">
                <a href="#">
                    <img src="https://lancer-app.000webhostapp.com/images/svg/home.svg" height="20" width="auto"> <span> Dashboard</span></a>
            </li>
            <li>
                <a href="#">
                    <img src="https://lancer-app.000webhostapp.com/images/svg/customer.svg" height="20" width="auto"> <span> Client</span>
                </a>
            </li>
            <li class="">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><img src="https://lancer-app.000webhostapp.com/images/svg/lightbulb.svg" height="20" width="auto"> <span> Projects</span></a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#" class="pl-4"><i class="fas fa-dot-circle"></i> Status</a>
                    </li>
                    <li>
                        <a href="#" class="pl-4"><i class="fas fa-dot-circle"></i> Overview</a>
                    </li>
                    <li>
                        <a href="#" class="pl-4 "><i class="fas fa-dot-circle"></i> Collabrators</a>
                    </li>
                    <li>
                        <a href="#" class="pl-4"><i class="fas fa-dot-circle"></i> Task</a>
                    </li>
                    <li>
                        <a href="#" class="pl-4"><i class="fas fa-dot-circle"></i> Documents</a>
                    </li>
                    
                </ul>
            </li>
            <li>
                <a href="#">
                    <img src="https://lancer-app.000webhostapp.com/images/svg/approve-invoice.svg" height="20" width="auto"> <span> Invoice</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="https://lancer-app.000webhostapp.com/images/svg/policy.svg" height="20" width="auto"> <span> Contract</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="https://lancer-app.000webhostapp.com/images/svg/approval.svg" height="20" width="auto"> <span> Proposals</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

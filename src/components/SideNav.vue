<template>
    <!-- Sidebar Holder -->
    <nav id="sidebar">
        <div class="sidebar-header">
            <img src="https://lancer-app.000webhostapp.com/images/svg/Lancers.svg" height="35" width="auto" class="img img-responsive">
        </div>
        <ul class="list-unstyled components">
            <router-link to="/dashboard" tag="li" exact>
                <a> <img src="https://lancer-app.000webhostapp.com/images/svg/home.svg" height="20" width="auto"> <span> Dashboard</span></a>
            </router-link>
            <router-link to="/clients" tag="li" exact>
                   <a> <img src="https://lancer-app.000webhostapp.com/images/svg/customer.svg" height="20" width="auto"> <span> Client</span></a>
            </router-link>
            <li class="">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><img src="https://lancer-app.000webhostapp.com/images/svg/lightbulb.svg" height="20" width="auto"> <span> Projects</span></a>
                <ul class="collapse list-unstyled" id="homeSubmenu">

                    <router-link to="/project/status" tag="li" exact>
                        <a class="pl-4"><i class="fas fa-dot-circle"></i> Status</a>
                    </router-link>
                    
                    <router-link to="/project/overview" tag="li" exact>
                        <a class="pl-4"><i class="fas fa-dot-circle"></i> Overview</a>
                    </router-link>
                
                    <router-link to="/project/collaborators" tag="li" exact>
                        <a class="pl-4 "><i class="fas fa-dot-circle"></i> Collabrators</a>
                    </router-link>
                    
                    <router-link to="/project/tasks" tag="li" exact>
                        <a class="pl-4 "><i class="fas fa-dot-circle"></i> Task</a>
                    </router-link>
                    
                    <router-link tag="li" exact to="/project/documents">
                        <a class="pl-4 "><i class="fas fa-dot-circle"></i> Documents</a>
                    </router-link>
                                        
                </ul>
            </li>
            <router-link to="/project/invoice" tag="li" exact>
                <a> <img src="https://lancer-app.000webhostapp.com/images/svg/approve-invoice.svg" height="20" width="auto"> <span> Invoice</span></a>
            </router-link>
            <router-link to="/project/contracts" tag="li" exact>
                <a> <img src="https://lancer-app.000webhostapp.com/images/svg/policy.svg" height="20" width="auto"> <span> Contract</span></a>
            </router-link>
            <router-link to="/project/proposals" tag="li" exact>
                <a> <img src="https://lancer-app.000webhostapp.com/images/svg/approval.svg" height="20" width="auto"> <span> Proposals</span></a>
            </router-link>
        </ul>
    </nav>
</template>

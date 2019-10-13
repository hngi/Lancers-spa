<template>
    
    <div class="wrapper">
        <Sidenav />

        <!-- Page Content Holder -->
        <div id="content">
            <Topnav />

            <section class="">
                <div class="container-fluid">
                    <h4 class="mt-0 text-primary">PROJECTS</h4>
                    <div class="">
                        <div class="">
                            <form class="form-inline">
                                <select class="form-control">
                                    <option>Completed</option>
                                    <option>Pending</option>
                                    <option>Active</option>
                                </select>
                            </form>
                        </div>
                        <div class="table-responsive">
                            <table class="table project-table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Start Date</th>
                                        <th class="text-right" scope="col">Paid</th>
                                        <th class="text-right" scope="col">Due</th>
                                        <th scope="col">Status</th>
                                        <th scope="col"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="py-2">
                                        <td scope="row" class="rounded-left border border-right-0">
                                            <span class="text-small text-muted mr-2">
                                                <i class="fas fa-circle"></i>
                                            </span> 
                                            <span class="">Mar. 10, 2019</span>
                                        </td>
                                        <td class="border-top border-bottom">Foodie</td>
                                        <td class="border-top border-bottom">Aug. 10, 2019</td>
                                        <td class="border-top border-bottom text-right">₦200,000</td>
                                        <td class="border-top border-bottom text-right">₦200,000</td>
                                        <td class="border-top border-bottom">
                                            <span class="alert alert-primary py-0 px-2 small m-0">Completed</span>
                                        </td>
                                        <td class="rounded-right border border-left-0">
                                            <div class="dropdown dropleft">
                                                <a class="btn btn-white btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a class="dropdown-item text-success" href="#"><i class="fas fa-binoculars"></i> View</a>
                                                    <a class="dropdown-item text-secondary" href="#"><i class="fas fa-edit"></i> Edit</a>
                                                    <a class="dropdown-item text-danger" href="#"><i class="fas fa-trash-alt"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="py-2">
                                        <td scope="row" class="rounded-left border border-right-0">
                                            <span class="text-small text-muted mr-2">
                                                <i class="fas fa-circle"></i>
                                            </span> 
                                            <span class="">Mar. 10, 2019</span>
                                        </td>
                                        <td class="border-top border-bottom">Foodie</td>
                                        <td class="border-top border-bottom">Aug. 10, 2019</td>
                                        <td class="border-top border-bottom text-right">₦200,000</td>
                                        <td class="border-top border-bottom text-right">₦200,000</td>
                                        <td class="border-top border-bottom">
                                            <span class="alert alert-primary py-0 px-2 small m-0">Completed</span>
                                        </td>
                                        <td class="rounded-right border border-left-0">
                                            <div class="dropdown dropleft">
                                                <a class="btn btn-white btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a class="dropdown-item text-success" href="#"><i class="fas fa-binoculars"></i> View</a>
                                                    <a class="dropdown-item text-secondary" href="#"><i class="fas fa-edit"></i> Edit</a>
                                                    <a class="dropdown-item text-danger" href="#"><i class="fas fa-trash-alt"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="py-2">
                                        <td scope="row" class="rounded-left border border-right-0">
                                            <span class="text-small text-muted mr-2">
                                                <i class="fas fa-circle"></i>
                                            </span> 
                                            <span class="">Mar. 10, 2019</span>
                                        </td>
                                        <td class="border-top border-bottom">Foodie</td>
                                        <td class="border-top border-bottom">Aug. 10, 2019</td>
                                        <td class="border-top border-bottom text-right">₦200,000</td>
                                        <td class="border-top border-bottom text-right">₦200,000</td>
                                        <td class="border-top border-bottom">
                                            <span class="alert alert-primary py-0 px-2 small m-0">Completed</span>
                                        </td>
                                        <td class="rounded-right border border-left-0">
                                            <div class="dropdown dropleft">
                                                <a class="btn btn-white btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a class="dropdown-item text-success" href="#"><i class="fas fa-binoculars"></i> View</a>
                                                    <a class="dropdown-item text-secondary" href="#"><i class="fas fa-edit"></i> Edit</a>
                                                    <a class="dropdown-item text-danger" href="#"><i class="fas fa-trash-alt"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="py-2">
                                        <td scope="row" class="rounded-left border border-right-0">
                                            <span class="text-small text-muted mr-2">
                                                <i class="fas fa-circle"></i>
                                            </span> 
                                            <span class="">Mar. 10, 2019</span>
                                        </td>
                                        <td class="border-top border-bottom">Foodie</td>
                                        <td class="border-top border-bottom">Aug. 10, 2019</td>
                                        <td class="border-top border-bottom text-right">₦200,000</td>
                                        <td class="border-top border-bottom text-right">₦200,000</td>
                                        <td class="border-top border-bottom">
                                            <span class="alert alert-primary py-0 px-2 small m-0">Completed</span>
                                        </td>
                                        <td class="rounded-right border border-left-0">
                                            <div class="dropdown dropleft">
                                                <a class="btn btn-white btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a class="dropdown-item text-success" href="#"><i class="fas fa-binoculars"></i> View</a>
                                                    <a class="dropdown-item text-secondary" href="#"><i class="fas fa-edit"></i> Edit</a>
                                                    <a class="dropdown-item text-danger" href="#"><i class="fas fa-trash-alt"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="py-2">
                                        <td scope="row" class="rounded-left border border-right-0">
                                            <span class="text-small text-muted mr-2">
                                                <i class="fas fa-circle"></i>
                                            </span> 
                                            <span class="">Mar. 10, 2019</span>
                                        </td>
                                        <td class="border-top border-bottom">Foodie</td>
                                        <td class="border-top border-bottom">Aug. 10, 2019</td>
                                        <td class="border-top border-bottom text-right">₦200,000</td>
                                        <td class="border-top border-bottom text-right">₦200,000</td>
                                        <td class="border-top border-bottom">
                                            <span class="alert alert-primary py-0 px-2 small m-0">Completed</span>
                                        </td>
                                        <td class="rounded-right border border-left-0">
                                            <div class="dropdown dropleft">
                                                <a class="btn btn-white btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a class="dropdown-item text-success" href="#"><i class="fas fa-binoculars"></i> View</a>
                                                    <a class="dropdown-item text-secondary" href="#"><i class="fas fa-edit"></i> Edit</a>
                                                    <a class="dropdown-item text-danger" href="#"><i class="fas fa-trash-alt"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="py-2">
                                        <td scope="row" class="rounded-left border border-right-0">
                                            <span class="text-small text-muted mr-2">
                                                <i class="fas fa-circle"></i>
                                            </span> 
                                            <span class="">Mar. 10, 2019</span>
                                        </td>
                                        <td class="border-top border-bottom">Foodie</td>
                                        <td class="border-top border-bottom">Aug. 10, 2019</td>
                                        <td class="border-top border-bottom text-right">₦200,000</td>
                                        <td class="border-top border-bottom text-right">₦200,000</td>
                                        <td class="border-top border-bottom">
                                            <span class="alert alert-primary py-0 px-2 small m-0">Completed</span>
                                        </td>
                                        <td class="rounded-right border border-left-0">
                                            <div class="dropdown dropleft">
                                                <a class="btn btn-white btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a class="dropdown-item text-success" href="#"><i class="fas fa-binoculars"></i> View</a>
                                                    <a class="dropdown-item text-secondary" href="#"><i class="fas fa-edit"></i> Edit</a>
                                                    <a class="dropdown-item text-danger" href="#"><i class="fas fa-trash-alt"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div> 
    <!-- <button class="btn btn-secondary text-white rounded-circle" id="add-something">
        <i class="fas fa-plus"></i>
    </button> -->

</template>
<script>
import Sidenav from '../components/SideNav.vue'
import Topnav from '../components/TopNav.vue'

export default {
    data(){
        return {
            
        }
    },
    components: {
        'Sidenav' : Sidenav,
        'Topnav' : Topnav
    }
}
</script>
<style src='@/assets/css/base.css'></style>

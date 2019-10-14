<template>
    <tr class="py-2">
        <td scope="row" class="rounded-left border border-right-0">
            <span class="user_avatar_link" href="">
                <div class="user_avatar">
                   {{person.name.split(" ")[0][0] + person.name.split(" ")[1][0]}}
                </div>
            </span>
        </td>
        <td class="border-top border-bottom text-center">{{person.project}}</td>
        <td class="border-top border-bottom text-center">{{person.name}}</td>
        <td class="border-top border-bottom text-center">{{person.designation}}</td>
        
        <td class="rounded-right border border-left-0 text-right">
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
</template>

<script>
export default {
    name: "Collaborators",
    data: function(){
        return {

        }
    },
    props:{
        person: Object
    }
}
</script>

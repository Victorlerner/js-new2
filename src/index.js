import {HeaderComponent} from "./componets/header.component";
import {NavigationComponent} from "./componets/navigation.component";
import {CreateComponent} from "./componets/create.component";
import {PostComponent} from "./componets/post.component";
import {FavoriteComponent} from "./componets/favorite.component";
import {LoaderComponent} from "./componets/loader.component";


const header = new HeaderComponent('header')
const navigation = new NavigationComponent('navigation')
const loader = new LoaderComponent('loader')

const posts = new PostComponent('posts', {loader})
const create = new CreateComponent('create')
const favorite = new FavoriteComponent('favorite', {loader})

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])
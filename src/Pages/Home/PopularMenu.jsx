
import useMenu from '../../Hooks/useMenu';
import MenuItems from '../../Shared/MenuItems';
import SecTitle from './SecTitle';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item=> item.category === 'popular');

    // const [menu, setMenu] = useState([])

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item=> item.category === 'popular');
    //         setMenu(popularItems)})
    // },[])
    return (
        <div className='py-2'>
            <SecTitle heading={'---Check it out---'} subHeading={'FROM OUR MENU'}>
            </SecTitle>

               {/* popular menu */}
            <div className='grid md:grid-cols-2 gap-4 my-4'>
                  {
                    popularItems.map(item=> <MenuItems key={item._id} item={item}/>)
                  }

            </div>
        </div>
    );
};

export default PopularMenu;
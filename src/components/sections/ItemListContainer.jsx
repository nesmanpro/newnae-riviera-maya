
import { Details } from './Details';
import { ItemList } from './ItemList';
import { Banner } from '../layouts/Banner';
import { BannerCta } from '../layouts/BannerCta';
import { useDepartments } from '../../hooks/useDepartments';


export const ItemListContainer = () => {

    const { departments } = useDepartments()

    return (
        <div className='bg-arenaClaro'>
            <Details />
            <ItemList productos={departments} />
            <Banner />
            <BannerCta />
        </div>
    )
}

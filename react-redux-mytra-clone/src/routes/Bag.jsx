
import BagSummary from '../components/BagSummary'
import BagItem from '../components/BagItem'

import { useSelector } from 'react-redux'
import ErrorMessage from '../components/errorMessage';

const Bag = () => {
    const bag = useSelector((state) => state.bag);
    const bagItems = useSelector((state) => state.bag);
    const items = useSelector((state) => state.items);
    const finalItems = items.filter((item) => {
      const itemIndex = bagItems.indexOf(item.id);
      return itemIndex >= 0;
    });
    return (
        <div>
            <>
                <main>
                    <div className="bag-page">
                        <div className="bag-items-container">
                            {bag.length == 0 && <ErrorMessage/>}   
                            {finalItems.map((item) => (
                                <BagItem item={item} />
                            ))}
                        </div>
                        <div className="bag-summary">
                 

                            <BagSummary />
                        </div>
                    </div>
                </main>

            </>

        </div>
    )
}

export default Bag;

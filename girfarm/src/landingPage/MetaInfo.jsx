import React from 'react';
import { Helmet } from 'react-helmet';
const MetaInfo = () => {

    document.title="Gir Madhuli Farm & Resort"

    return (
        <div>
            <Helmet>
                <meta name="description" content="Gir madhuli Farmhouse located in the heart of Gir Forest. Discover the beauty of nature in the heart of the forest. We offer delicious food and excellent facilities for a wonderful experience." />
                <meta name="keywords" content="girmadhuli farmhouse, girmadhuli, farmhouse, near by farmhouse" />
            </Helmet>
        </div>
    );
}

export default MetaInfo;

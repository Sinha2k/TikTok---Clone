import type { NextPage } from 'next';
import Head from 'next/head';
import Main from '../components/Main/main';
import Navbar from '../components/Navbar/Navbar';
import SideBar from '../components/Sidebar/SideBar';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>TikTok - Make Your Day</title>
                <link rel="icon" href="/logo.ico" />
            </Head>
            <Navbar style={{ paddingRight: '100px', paddingLeft: '100px' }} />
            <div style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
                <div style={{ width: '1150px', display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <SideBar />
                    </div>
                    <Main />
                </div>
            </div>
        </>
    );
};

export default Home;

import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/Public/LandingPage';
import RiderLayout from './layouts/RiderLayout';
import RiderDashboard from './pages/Rider/RiderDashboard';
import FindRide from './pages/Rider/FindRide';
import RideDetails from './pages/Rider/RideDetails';
import Payment from './pages/Rider/Payment';
import MyRides from './pages/Rider/MyRides';
import DriverLayout from './layouts/DriverLayout';
import DriverDashboard from './pages/Driver/DriverDashboard';
import PostRide from './pages/Driver/PostRide';
import Chat from './components/Shared/Chat';
import Profile from './pages/Shared/Profile';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Rider Routes */}
        <Route path="/rider" element={
          <RiderLayout>
            <RiderDashboard />
          </RiderLayout>
        } />
        <Route path="/rider/find" element={
          <RiderLayout>
            <FindRide />
          </RiderLayout>
        } />
        <Route path="/rider/ride/:id" element={
          <RiderLayout>
            <RideDetails />
          </RiderLayout>
        } />
        <Route path="/rider/payment" element={
          <RiderLayout>
            <Payment />
          </RiderLayout>
        } />
        <Route path="/rider/my-rides" element={
          <RiderLayout>
            <MyRides />
          </RiderLayout>
        } />
        <Route path="/rider/messages" element={
          <RiderLayout>
            <Chat role="rider" />
          </RiderLayout>
        } />
        <Route path="/rider/safety" element={
          <RiderLayout>
            <div>Safety Page</div>
          </RiderLayout>
        } />
        <Route path="/rider/profile" element={
          <RiderLayout>
            <Profile role="rider" />
          </RiderLayout>
        } />
        
        {/* Driver Routes */}
        <Route path="/driver" element={
          <DriverLayout>
            <DriverDashboard />
          </DriverLayout>
        } />
        <Route path="/driver/post" element={
          <DriverLayout>
            <PostRide />
          </DriverLayout>
        } />
        <Route path="/driver/routes" element={
          <DriverLayout>
            <div>Manage Routes Page</div>
          </DriverLayout>
        } />
        <Route path="/driver/earnings" element={
          <DriverLayout>
            <div>Earnings Page</div>
          </DriverLayout>
        } />
        <Route path="/driver/riders" element={
          <DriverLayout>
            <div>Riders Page</div>
          </DriverLayout>
        } />
        <Route path="/driver/messages" element={
          <DriverLayout>
            <Chat role="driver" />
          </DriverLayout>
        } />
        <Route path="/driver/profile" element={
          <DriverLayout>
            <Profile role="driver" />
          </DriverLayout>
        } />
        
        {/* Catch-all Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;

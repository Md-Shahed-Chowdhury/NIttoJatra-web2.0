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
import Notifications from './pages/Shared/Notifications';
import TrackRide from './pages/Rider/TrackRide';
import ViewRoute from './pages/Rider/ViewRoute';
import Login from './pages/Public/Login';
import Signup from './pages/Public/Signup';
import ManageRoutes from './pages/Driver/ManageRoutes';
import Earnings from './pages/Driver/Earnings';
import RidersList from './pages/Driver/RidersList';
import SafetyCenter from './pages/Rider/SafetyCenter';
import Payout from './pages/Driver/Payout';
import TransactionHistory from './pages/Driver/TransactionHistory';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
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
        <Route path="/rider/track" element={
          <RiderLayout>
            <TrackRide />
          </RiderLayout>
        } />
        <Route path="/rider/view-route" element={
          <RiderLayout>
            <ViewRoute />
          </RiderLayout>
        } />
        <Route path="/rider/safety" element={
          <RiderLayout>
            <SafetyCenter />
          </RiderLayout>
        } />
        <Route path="/rider/notifications" element={
          <RiderLayout>
            <Notifications />
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
            <ManageRoutes />
          </DriverLayout>
        } />
        <Route path="/driver/earnings" element={
          <DriverLayout>
            <Earnings />
          </DriverLayout>
        } />
        <Route path="/driver/riders" element={
          <DriverLayout>
            <RidersList />
          </DriverLayout>
        } />
        <Route path="/driver/payout" element={
          <DriverLayout>
            <Payout />
          </DriverLayout>
        } />
        <Route path="/driver/history" element={
          <DriverLayout>
            <TransactionHistory />
          </DriverLayout>
        } />
        <Route path="/driver/messages" element={
          <DriverLayout>
            <Chat role="driver" />
          </DriverLayout>
        } />
        <Route path="/driver/notifications" element={
          <DriverLayout>
            <Notifications />
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

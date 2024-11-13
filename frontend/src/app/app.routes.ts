import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FeedComponent } from './pages/feed/feed.component';
import { StoryProfileComponent } from './pages/story-profile/story-profile.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "feed",
        component: FeedComponent
    },
    {
        path: 'story',
        component: StoryProfileComponent
    },
];

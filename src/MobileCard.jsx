import React, { useState } from 'react';
import './MobileCard.css'; // Assuming you have some basic styling

const data = [
    {
        name: 'Flutter App',
        text: 'Flutter development involves utilizing the Flutter framework, which was created by Google, to build cross-platform mobile applications from a single codebase. This powerful framework allows developers to craft high-performance apps that run smoothly on both iOS and Android platforms without the need for separate codebases. With Flutter, developers have access to a rich set of customizable widgets that can be tailored to create unique and engaging user interfaces. Additionally, Flutter’s reactive UI framework ensures that the app’s interface responds fluidly to user interactions, providing a seamless and intuitive user experience. This makes Flutter an excellent choice for developers looking to efficiently create visually appealing and performant mobile applications.'
    },
    {
        name: 'React Native App',
        text: 'React Native app development involves leveraging the React Native framework, a powerful tool developed by Facebook, to build sophisticated cross-platform mobile applications using JavaScript and React. This innovative framework enables developers to craft native-like experiences for both iOS and Android platforms, all from a single codebase. By using React Native, developers can achieve a high level of code reuse, significantly reducing development time and effort. The framework provides access to a wide range of native components, ensuring that apps not only look and feel native but also perform efficiently. React Natives hot-reloading feature allows developers to see changes instantly without recompiling the entire application, streamlining the development process, performant mobile applications that provide seamless user experiences across multiple platforms.'
    },
    {
        name: 'iOS App',
        text: 'iOS app development involves using Apples Swift or Objective- C programming languages alongside the Xcode IDE to create native applications exclusively for iOS devices like iPhones and iPads.Developers harness Apples robust frameworks and design guidelines, ensuring apps are user-friendly and high-performing. Swift, known for safety and speed, and Objective-C, a powerful, established language.Xcode provides essential tools for coding, debugging, and testing, including simulators for device testing.Adhering to Apples Human Interface Guidelines ensures apps offer a cohesive user experience.Developers leverage Apples APIs and frameworks like ARKit for augmented reality and CoreML for machine learning to add advanced features.This approach ensures iOS apps are optimized, feature - rich, and aligned with Apples ecosystem standards for reliability and performance.'
    },
{
    name: 'Android App',
        text: 'Android app development utilizes Java or Kotlin programming languages with the Android Studio IDE to create native applications tailored for Android devices. Developers leverage Androids comprehensive SDK, libraries, and Material Design guidelines to ensure apps cater to diverse screen sizes and hardware configurations. Kotlin, recognized for concise syntax and null safety, and Java, renowned for its maturity and vast ecosystem, empower developers to build robust apps. Enhancing development efficiency. Material Design guidelines foster intuitive user interfaces with consistent behaviors across devices. APIs like Google Maps and Firebase enable integration of advanced features such as location services and real-time databases, ensuring Android apps are feature-rich and responsive, meeting user expectations on the Android platform.'
},
{
    name: 'Cross Platform App',
        text: 'Cross-platform app development involves using frameworks like React Native, Flutter, or Xamarin to build applications that can run on multiple platforms, such as iOS, Android, and sometimes even web, using a single codebase. It enables developers to reach a broader audience efficiently while minimizing development time and costs.'
}
];

const MobileCard = () => {
    const [activeTab, setActiveTab] = useState(0);

    const changeTabOnClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs-body ">
            <TabHeader data={data} click={changeTabOnClick} activeId={activeTab} />
            <TabContent data={data} activeId={activeTab} />
        </div>
    );
};

const TabHeader = ({ data, click, activeId }) => {
    return (
        <ul className="tabs-header">
            {data.map((item, index) => (
                <li key={index} className={activeId === index ? 'active' : ''}>
                    <a onClick={() => click(index)}><span>{item.name}</span></a>
                </li>
            ))}
        </ul>
    );
};

const TabContent = ({ data, activeId }) => {
    return (
        <div className="tabs-content mx-28 h-[15rem]">
            {data.map((item, index) => (
                <div key={index} className={`tabs-textItem ${activeId === index ? 'show' : ''}`}>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
};

export default MobileCard;

import { __ } from '@wordpress/i18n';
import { Button, IconButton, PanelBody, TextControl, ToggleControl, __experimentalSpacer as Spacer, __experimentalInputControl as InputControl } from '@wordpress/components';
import { produce } from 'immer';
import { updateData } from './../../../../utils/functions';


const General = ({ attributes, setAttributes }) => {

  const { plans, title, description, showUpdateDelete, } = attributes;




  // #Header Start

  // Header Toggle  visibility
  const toggleUpdateDelete = () => {
    setAttributes({ showUpdateDelete: !showUpdateDelete });
  };

  // Update title
  const updateTitle = (newTitle) => {
    setAttributes({ title: newTitle });
  };

  // Update description
  const updateDescription = (newDescription) => {
    setAttributes({ description: newDescription });
  };

  // Delete title (reset to default)
  const deleteTitle = () => {
    setAttributes({ title: 'Please Your Titile Add ..... ' });
  };

  // Delete description (reset to default)
  const deleteDescription = () => {
    setAttributes({
      description: 'Please Your  description Add ..... ',
    });
  };

  //#Header End



  //# Price All Card START

  // Plan toggle visibility of a specific plan(Immutable )
  const togglePlanVisibility = (planIndex) => {
    setAttributes({
      plans: plans.map((plan, index) =>
        index === planIndex ? { ...plan, isVisible: !plan.isVisible } : plan
      )
    });
  };

  // Plan toggle visibility of a specific Most Popular (Immutable )
  const togglePopularVisibility = (planIndex) => {
    setAttributes({
      plans: plans.map((plan, index) =>
        index === planIndex ? { ...plan, isPopular: !plan.isPopular } : plan
      )
    });
  };

  // Add new plan (Immutable)
  const addPlan = () => {
    const newPlan = {
      title: 'New Plan',
      price: 'New Pricing',
      features: [
        { text: "Unlimited Websites", "iconType": "fa-solid fa-circle-check" },
        { text: "1 User", "iconType": "fa-solid fa-circle-check" },
        { text: "100MB Space/website", "iconType": "fa-solid fa-circle-check" },
        { text: "Continuous deployment", "iconType": "fa-solid fa-circle-check" },
        { text: "No priority support", "iconType": "fa fa-times-circle" }
      ],
      buttonLabel: 'New Button',
      buttonUrl: 'https://wp-gb.com/',
      isPopular: false,
      PopularText: 'Most Popular',
      isVisible: true
    };

    setAttributes({ plans: [...plans, newPlan] });

  };

  //! Update plan Property (nijer custom code Update korar jonno ata )

  // const updatePlanProperty = (index, value, type) => {
  //   setAttributes({plans : produce(plans, draft => {
  //     draft[index][type] = value;
  //   })})
  // };


  //! method 1(Immutable)

  const removePlan = (planIndex) => {
    const updatedProfiles = plans.filter((_, i) => i !== planIndex);
    setAttributes({ plans: updatedProfiles });
  };

  // !method 2(Immutable)

  // const removePlan = (planIndex) => {
  //   const updatedProfiles = [
  //     ...plans.slice(0, planIndex),
  //     ...plans.slice(planIndex + 1)
  //   ];
  //   setAttributes({ plans: updatedProfiles });
  // };

  //! method 3 (Mutable):
  // const removePlan = (planIndex) => {
  //   const updatedProfiles = [...plans]; // Make a shallow copy
  //   updatedProfiles.splice(planIndex, 1); // Mutate the copy
  //   setAttributes({ plans: updatedProfiles });
  // };


  //! methood 1 (Immutable)
  // const duplicatePlan = (planIndex) => {
  //   const updatedPlans = [
  //     ...plans.slice(0, planIndex + 1), 
  //     { ...plans[planIndex] },          
  //     ...plans.slice(planIndex + 1),    
  //   ];
  //   setAttributes({ plans: updatedPlans });
  // };

  //! methood 2 (Immutable)
  const duplicatePlan = (planIndex) => {
    const updatedPlans = [...plans]; // Create a shallow copy of the array
    // Duplicate the plan and insert it right after the original one
    updatedPlans.splice(planIndex + 1, 0, { ...plans[planIndex] });
    setAttributes({ plans: updatedPlans });
  };
  //# Price All Card END


  //# Feature Start
  // Update plan's feature 1
  // const updateFeature = (planIndex, featureIndex, value) => {
  //   const newPlans = [...plans];
  //   newPlans[planIndex].features[featureIndex].text = value;
  //   setAttributes({ plans: newPlans });
  //   console.log(newPlans);
  // };

  // Update plan's feature 2

  const updateFeature = (planIndex, featureIndex, value, type) => {
    setAttributes({
      plans: produce(plans, draft => {
        draft[planIndex].features[featureIndex][type] = value;
      })
    })
  };

  // Add new feature to a plan
  // const addFeature = (planIndex) => {
  //   const newPlans = [...plans];
  //   newPlans[planIndex].features.push({ text: 'New Feature', iconType: "fa-solid fa-circle-check" });
  //   setAttributes({ plans: newPlans });
  // };

  const addFeature = (planIndex) => {
    const newPlans = JSON.parse(JSON.stringify(plans)); 
    newPlans[planIndex].features.push({
      text: 'New Feature',
      iconType: "fa-solid fa-circle-check",
      id: Date.now(), 
    });
    setAttributes({ plans: newPlans });
  };
  

  // Remove feature from a plan
  // const removeFeature = (planIndex, featureIndex) => {
  //   const newPlans = [...plans];
  //   newPlans[planIndex].features.splice(featureIndex, 1);
  //   setAttributes({ plans: newPlans });
  // };

  const removeFeature = (planIndex, featureIndex) => {
    const newPlans = JSON.parse(JSON.stringify(plans)); 
    newPlans[planIndex].features.splice(featureIndex, 1);
    setAttributes({ plans: newPlans });
  };
  

  // Duplicate feature and insert it below the original feature
  // const duplicateFeature = (planIndex, featureIndex) => {
  //   const newPlans = [...plans];
  //   const duplicatedFeature = newPlans[planIndex].features[featureIndex];
  //   newPlans[planIndex].features.splice(featureIndex + 1, 0, duplicatedFeature);
  //   setAttributes({ plans: newPlans });
  // };

  const duplicateFeature = (planIndex, featureIndex) => {
    setAttributes({
      plans: produce(plans, draft => {
        const duplicatedFeature = {
          ...draft[planIndex].features[featureIndex],
          id: Date.now(), 
        };
        draft[planIndex].features.splice(featureIndex + 1, 0, duplicatedFeature);
      }),
    });
  };
  
  
  //# Feature End

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Plans Card Customization", "b-blocks")}
        initialOpen={false}
      >
        {/* Header ToggleControl On/Off*/}
        <ToggleControl
          label="Show Update/Delete Options"
          checked={showUpdateDelete}
          onChange={toggleUpdateDelete}
        />

        <Spacer marginBottom="20px" />

        {/* Header ToggleControl Text On/Off */}
        {showUpdateDelete && (
          <div>

            {/* Header Title */}
            <TextControl
              label="Title"
              placeholder='Please Your Titile Add '
              value={title}
              onChange={updateTitle}
            />

            {/* Header Remove Title */}
            <IconButton style={{ color: "red" }}
              label="Remove Title"
              icon="trash"
              onClick={deleteTitle}
            >Delete
            </IconButton>

            <Spacer marginBottom="20px" />

            {/* Header Description */}
            <TextControl
              label="Description"
              placeholder='Please Your description Add'
              value={description}
              onChange={updateDescription}
            />

            {/* Header Remove Description */}
            <IconButton
              style={{ color: "red" }}
              onClick={deleteDescription}
              label="Remove Title"
              icon="trash"
            >
              Delete
            </IconButton>
          </div>
        )}

        <Spacer marginBottom="20px" />

        {/* Plans Table Section Start*/}
        <h2 >Plans Table : </h2>
        {plans?.map((plan, planIndex) => (
          < div key={planIndex} className="plan" >
            <PanelBody
              className="bPlPanelBody"
              title={`${__("Plan:", "b-blocks")} ${plan?.title}`}
              initialOpen={false}
            >
              {/* Plan ToggleControl On/Off*/}
              <ToggleControl
                label={`Show ${plan.title} Plan`}
                checked={plan.isVisible}
                onChange={() => togglePlanVisibility(planIndex)}
              />

              <Spacer marginBottom="20px" />

              {/* Plan Most Popular ToggleControl */}
              <ToggleControl
                label="Show Popular"
                checked={plan.isPopular}
                onChange={() => togglePopularVisibility(planIndex)}
              />

              <Spacer marginBottom="15px" />

              {/* Plan Most Popular text */}
              <InputControl
                label="Popular Button"
                value={plan.PopularText}
                onChange={(text) => setAttributes({ plans: updateData(plans, text, planIndex, 'PopularText') })}
              />

              <Spacer marginBottom="10px" />

              {/* Plan ToggleControl Text On/Off*/}
              {plan.isVisible && (
                <>
                  {/*Plan  Title */}
                  <TextControl
                    label="Plan Title"
                    placeholder="Your Plan Title"
                    value={plan.title}
                    // onChange={(value) => updatePlanProperty(planIndex, value, 'title')}  
                    onChange={(v) => setAttributes({ plans: updateData(plans, v, planIndex, 'title') })}
                  />

                  {/* Plan Price */}
                  <TextControl
                    label="Plan Price"
                    placeholder="Your Plan Price"
                    value={plan.price}
                    // onChange={(value) => updatePlanProperty(planIndex, value, 'price')} 
                    onChange={(v) => setAttributes({ plans: updateData(plans, v, planIndex, 'price') })}
                  />

                  <Spacer marginBottom="10px" />

                  {/* Button URL */}
                  <InputControl
                    label="Button URL"
                    value={plan?.buttonUrl}
                    onChange={(url) => setAttributes({ plans: updateData(plans, url, planIndex, 'buttonUrl') })}
                  />

                  <Spacer marginBottom="10px" />

                  {/* Plan Button Text */}
                  <TextControl
                    label="Plan button"
                    placeholder="Added Button Name"
                    value={plan.buttonLabel}
                    // onChange={(value) => updatePlanProperty(planIndex, value, 'buttonLabel')} 
                    onChange={(v) => setAttributes({ plans: updateData(plans, v, planIndex, 'buttonLabel') })}
                  />

                  <Spacer marginBottom="20px" />

                  {/* Features Section Start */}
                  <PanelBody
                    className="bPlPanelBody"
                    title={__("Features", "b-blocks")}
                    initialOpen={false}
                  >
                    <ul className="features">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>

                          {/* Feature iconType */}
                          <TextControl
                            label={__("Icon", "b-blocks")}
                            placeholder="fontAwesome iconType Name"
                            value={feature.iconType}
                            // onChange={(value) => updateFeature(planIndex, featureIndex, value)}
                            onChange={(value) => updateFeature(planIndex, featureIndex, value, "iconType")}
                          />

                          {/* Features Name */}
                          <TextControl
                            label={`${__("Feature", "b-blocks")} ${featureIndex + 1}`}
                            placeholder="Your Feature"
                            value={feature.text}

                            // onChange={(value) => updateFeature(planIndex, featureIndex, value,)}
                            onChange={(value) => updateFeature(planIndex, featureIndex, value, 'text')}
                          />

                          {/* Features Remove Button */}
                          <IconButton style={{ color: "red", }}
                            icon="trash"
                            onClick={() => removeFeature(planIndex, featureIndex)}
                            label="Remove Feature"
                          />

                          {/* Features Duplicate Button */}
                          <IconButton
                            icon="admin-page"
                            onClick={() => duplicateFeature(planIndex, featureIndex)}
                            label="Duplicate Feature"
                          />
                        </li>
                      ))}

                      {/* New Features Added */}
                      <Button isPrimary onClick={() => addFeature(planIndex)}>
                        Add Feature
                      </Button>
                      
                    </ul>
                  </PanelBody>
                  {/* Features Section End */}

                  <Spacer marginBottom="20px" />

                  {/* Plan DuplicatePlan / RemovePlan Button Section Start*/}
                  <div style={{ display: "flex", justifyItems: "left", alignItems: "center" }}>
                    <div style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "5px", }}>

                      <IconButton style={{ color: "red", }}
                        label="Remove Plan"
                        icon="trash"
                        onClick={() => removePlan(planIndex)}
                      >
                      </IconButton>
                      <p style={{ margin: "0" }}>Plan Table</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "5px", }}>

                      <IconButton style={{ color: "blue", }}
                        label="Duplicate Plan"
                        icon="admin-page"
                        onClick={() => duplicatePlan(planIndex)}
                      >
                      </IconButton>
                      <p style={{ margin: "0" }}>Duplicate Table</p>
                    </div>
                  </div>

                  {/* DuplicatePlan / RemovePlan button Section End*/}
                </>
              )}
            </PanelBody>
          </div>
        ))}
        {/* Plans Table Section End*/}

        {/* Full Plan Table Button */}
        <Button style={{ marginTop: "10px" }}
          onClick={addPlan}
          isPrimary
        >
          Add New Plan Table
        </Button>
      </PanelBody >
    </>
  )
}

export default General


//###### import { __ } from '@wordpress/i18n';
// import { Button, IconButton, PanelBody, TextControl, ToggleControl, __experimentalSpacer as Spacer } from '@wordpress/components';
// import { produce } from 'immer';
// import { updateData } from './../../../../utils/functions';

// const General = ({ attributes, setAttributes }) => {
//   const { plans, title, description, showUpdateDelete } = attributes;

//   // Plan toggle visibility of a specific plan
//   const togglePlanVisibility = (planIndex) => {
//     setAttributes({
//       plans: plans.map((plan, index) =>
//         index === planIndex ? { ...plan, isVisible: !plan.isVisible } : plan
//       ),
//     });
//   };

//   // Update plan Property
//   // const updatePlanProperty = (index, value, type) => {
//   //   setAttributes({plans : produce(plans, draft => {
//   //     draft[index][type] = value;
//   //   })})
//   // };

//   return (
//     <>
//       <PanelBody className="bPlPanelBody" title={__('Price Card Customization', 'b-blocks')} initialOpen={false}>
//         {/* Show Update/Delete Options Toggle */}
//         {showUpdateDelete && (
//           <div style={{ marginTop: '30px', marginBottom: '30px' }}>
//             {/* Option to add more custom controls for title/description if needed */}
//           </div>
//         )}

//         <Spacer marginBottom="30px" />

//         {/* Plans Section */}
//         <h3>Plans</h3>

//         {plans?.map((plan, planIndex) => {

//           const { title, price, buttonLabel } = plan;  //code ke aro esay korar jonno

//           return (

//             <div key={planIndex} className="plan">
//               <PanelBody className="bPlPanelBody" title={`${__('', 'b-blocks')} ${plan?.title}`} initialOpen={false}>
//                 {/* Plan ToggleControl */}
//                 <ToggleControl label={`Show ${plan.title} Plan`} checked={plan.isVisible} onChange={() => togglePlanVisibility(planIndex)} />
//                 <Spacer marginBottom="20px" />

//                 {/* Plan Details */}
//                 {plan.isVisible && (
//                   <>
//                     <TextControl
//                       label="Plan Title"
//                       placeholder="Your Plan Title"
//                       value={title}   //👇build function bplugins ar just update aer jono use kora
//                       onChange={(v) => setAttributes({ plans: updateData(plans, v, planIndex, 'title') })}
//                     // onChange={(value) => updatePlanProperty(planIndex, value, 'title')} //👈atar amr nijer update function
//                     />
//                     <TextControl
//                       label="Plan Price"
//                       placeholder="Your Plan Price"
//                       value={price}
//                       // onChange={(value) => updatePlanProperty(planIndex, value, 'price')} //👈atar amr nijer update function
//                       onChange={(v) => setAttributes({ plans: updateData(plans, v, planIndex, 'price') })}
//                       //👆build function bplugins ar just update aer jono use kora
//                     />
//                     <TextControl
//                       label="Plan Button"
//                       placeholder="Add Button Name"
//                       value={buttonLabel}
//                       // onChange={(value) => updatePlanProperty(planIndex, value, 'buttonLabel')} //👈atar amr nijer update function
//                       onChange={(v) => setAttributes({ plans: updateData(plans, v, planIndex, 'buttonLabel') })}
//                       //👆build function bplugins ar just update aer jono use kora
//                     />

//                     <Spacer marginBottom="20px" />

//                     {/* Duplicate/Remove Plan Buttons */}
//                     <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
//                       <IconButton style={{ color: 'red' }} label="Remove Plan" icon="trash" onClick={() => removePlan(planIndex)}>
//                         Plan
//                       </IconButton>
//                       <IconButton icon="admin-page" onClick={() => duplicatePlan(planIndex)} label="Duplicate Plan">
//                         Duplicate
//                       </IconButton>
//                     </div>
//                   </>
//                 )}

//                 {/* Add New Plan Button */}
//                 <Button style={{ marginTop: '10px' }} onClick={addPlan} isPrimary>
//                   Add New Plan
//                 </Button>
//               </PanelBody>
//             </div>
//           )

//         })}
//       </PanelBody>
//     </>
//   );
// };

// export default General;

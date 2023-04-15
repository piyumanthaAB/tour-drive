import React, { useState } from 'react';
import DropDown from '../../shared/Form Elements/DropDown';
import Label from '../../shared/Form Elements/Label';
import TextArea from '../../shared/Form Elements/TextArea';
import TextField from '../../shared/Form Elements/TextField';
import * as f from './AdminTourCreateFormElements';
import toast from 'react-hot-toast';
import submitForm from '../../../hooks/submitForm';

const AdminTourCreateForm = () => {
  const [guideOne, setGuideOne] = useState('Select guide one');
  const [guideTwo, setGuideTwo] = useState('Select guide two');
  const [category, setCategory] = useState({
    label: 'select tour category',
    value: '',
  });

  const availableGuides = ['mark', 'john', 'mathew'];

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [ageLimit, setAgeLimit] = useState('');
  const [duration, setDuration] = useState('');
  const [capacity, setCapacity] = useState('');
  const [highlights, setHighlights] = useState('');
  const [includes, setIncludes] = useState('');
  const [excludes, setExcludes] = useState('');
  const [tourPlan, setTourPlan] = useState('');

  const [guide_1, setGuide_1] = useState('');
  const [guide_2, setGuide_2] = useState('');
  const [guide_3, setGuide_3] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [locations, setLocations] = useState('');
  const [description, setDescription] = useState('');
  const [cities, setCities] = useState('');
  const [coverImg, setCoverImg] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const tourCategoryValues = [
    { label: 'city', value: 'city' },
    { label: 'hiking', value: 'hiking' },
    { label: 'adventure', value: 'adventure' },
    { label: 'historical', value: 'historical' },
    { label: 'cultural', value: 'cultural' },
  ];

  const onSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    const formData = new FormData();

    formData.append('tour_cover', coverImg);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('ageLimit', ageLimit);
    formData.append('capacity', capacity);
    formData.append('description', description);
    formData.append('duration', duration);
    formData.append('highlights', highlights);
    formData.append('tourPlan', tourPlan);
    formData.append('includes', includes);
    formData.append('excludes', excludes);
    formData.append('locations', locations);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    formData.append('cities', cities);
    formData.append('category', category.value);

    for (const file of galleryImages) {
      formData.append('tour_gallery', file);
    }

    console.log({ startDate });

    await toast.promise(
      submitForm('/api/v1/tours', formData, 'post', headers),
      {
        loading: 'Adding Tour...',
        success: (data) => {
          console.log({ data });
          return ` ${data.data.message} ` || 'success';
        },
        error: (err) => `${err.response.data.message}`,
      },
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      }
    );
  };

  const handleGalleryImages = (e) => {
    setGalleryImages(e.target.files);
  };

  const handleCoverImg = (e) => {
    setCoverImg(e.target.files[0]);
    // let url = URL.createObjectURL(e.target.files[0]);
    //     url=url.replace('blob:', '');
    //     // setSingleImg(url);
    //     console.log({singleImg:new URL(url)});
  };

  return (
    <>
      <f.Container>
        <f.FormTitle>Add Tour</f.FormTitle>
        <f.Form onSubmit={onSubmit}>
          <f.FormGroup>
            <Label labelText={'Tour Name'} />
            <TextField
              value={name}
              setValue={setName}
              placeholder={'Enter tour name here'}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Tour Price'} />
            <TextField
              value={price}
              setValue={setPrice}
              placeholder={'Enter tour price here'}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Tour Cover'} />
            <input
              name="coverImg"
              onChange={handleCoverImg}
              type="file"
              placeholder={'Upload tour cover image here'}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Tour Images'} />
            <input
              name="galleryImages"
              onChange={handleGalleryImages}
              multiple={true}
              type="file"
              placeholder={'Upload tour gallery images here'}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Age Limit'} />
            <TextField
              value={ageLimit}
              setValue={setAgeLimit}
              type="text"
              placeholder={'Enter tour maximum age limit here'}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Capacity'} />
            <TextField
              value={capacity}
              setValue={setCapacity}
              type="text"
              placeholder={'Enter maximum no of seats for this tour'}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Select Tour Guide 1'} />
            <DropDown
              dropDownValues={availableGuides}
              currentDropdownVal={guideOne}
              setCurrentDropdownVal={setGuideOne}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Select Tour Guide 2'} />
            <DropDown
              dropDownValues={availableGuides}
              currentDropdownVal={guideTwo}
              setCurrentDropdownVal={setGuideTwo}
            />
          </f.FormGroup>
          <f.FormGroup>
            <Label labelText={'Tour Visiting cities'} />
            <TextField
              value={cities}
              setValue={setCities}
              placeholder={
                'Enter cities visit during the tour here. ex city1, city2, city3'
              }
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Start Date'} />
            <f.DateInput
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
              // setValue={setStartDate}
              type={'date'}
            />
          </f.FormGroup>
          <f.FormGroup>
            <Label labelText={'End Date'} />
            <f.DateInput
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              // setValue={setStartDate}
              type={'date'}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Duration'} />
            <TextField
              value={duration}
              setValue={setDuration}
              type="text"
              placeholder={'Enter tour duration here'}
            />
          </f.FormGroup>

          {/* <f.FormGroup>
            <Label labelText={'End Date'} />
            <f.DateInput value={endDate} setValue={setEndDate} type={'date'} />
          </f.FormGroup> */}

          <f.FormGroup>
            <Label labelText={'Tour Category'} />
            <DropDown
              dropDownValues={tourCategoryValues}
              currentDropdownVal={category}
              setCurrentDropdownVal={setCategory}
            />
          </f.FormGroup>

          {/* <f.FormGroup>
            <Label labelText={'Select Tour type'} />
            <DropDown
              dropDownValues={ availableGuides}
              currentDropdownVal={guideTwo}
              setCurrentDropdownVal={setGuideTwo}
            />
          </f.FormGroup> */}

          <f.FormGroup>
            <Label labelText={'Tour Includes'} />
            <TextArea
              value={includes}
              setValue={setIncludes}
              rows={10}
              placeholder="Enter Tour Includes here.
              EX: 
              Include 1, 
              Include 2,"
            />
          </f.FormGroup>
          <f.FormGroup>
            <Label labelText={'Tour Excludes'} />
            <TextArea
              value={excludes}
              setValue={setExcludes}
              rows={10}
              placeholder="Enter Tour Excludes here.
              EX: 
              Exclude 1, 
              Exclude 2,"
            />
          </f.FormGroup>
          <f.FormGroup>
            <Label labelText={'Tour Highlights'} />
            <TextArea
              value={highlights}
              setValue={setHighlights}
              rows={10}
              placeholder="Enter Tour highlights here.
              EX: 
              highlist 1, 
              highlight 2,"
            />
          </f.FormGroup>
          <f.FormGroup>
            <Label labelText={'Tour Locations'} />
            <TextArea
              value={locations}
              setValue={setLocations}
              rows={10}
              placeholder="Enter coordinates of the locations here.
              EX:
              [latitude_1,longtitude_1] 
              [latitude_2,longtitude_2] 
              [latitude_3,longtitude_3] 

              "
            />
          </f.FormGroup>
          <f.FormGroup>
            <Label labelText={'Tour Plan'} />
            <TextArea
              value={tourPlan}
              setValue={setTourPlan}
              rows={10}
              placeholder="Enter tour plan here.
              EX:
              [day 1,title for the day 1 ,plan 1 of the day] 
              [day 2,title for the day 2,plan 2 of the day] 
              [day 3,title for the day 3,plan 3 of the day] 

              "
            />
          </f.FormGroup>
          <f.FormGroup>
            <Label labelText={'Tour Description'} />
            <TextArea
              value={description}
              setValue={setDescription}
              rows={10}
              placeholder="Enter tour description here"
            />
          </f.FormGroup>

          <f.FormGroup>
            <f.SubmitBtn type="submit">Add Tour</f.SubmitBtn>
            <f.SubmitBtn color="#333" type="reset">
              Clear
            </f.SubmitBtn>
          </f.FormGroup>
        </f.Form>
      </f.Container>
    </>
  );
};

export default AdminTourCreateForm;

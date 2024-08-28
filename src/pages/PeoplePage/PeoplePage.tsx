import { PeopleFilters } from '../../components/PeopleFilters';
import { Loader } from '../../components/Loader';
import { PeopleTable } from '../../components/PeopleTable';
import { PeopleContext } from '../../contexts/PeopleContext';
import { useParams } from 'react-router-dom';

export const PeoplePage = () => {
  const { slug: selectedPersonSlug } = useParams();
  const { people } = PeopleContext.useState();

  return (
    <>
      <h1 className="title">People Page</h1>

      <div className="block">
        <div className="columns is-desktop is-flex-direction-row-reverse">
          <div className="column is-7-tablet is-narrow-desktop">
            <PeopleFilters />
          </div>

          <div className="column">
            <div className="box table-container">
              {people.isReady ? (
                <>
                  {people.isError ? (
                    <p data-cy="peopleLoadingError" className="has-text-danger">
                      Something went wrong
                    </p>
                  ) : (
                    <>
                      {people.value.length === 0 ? (
                        <p data-cy="noPeopleMessage">
                          There are no people on the server
                        </p>
                      ) : (
                        <PeopleTable selectedPersonSlug={selectedPersonSlug} />
                      )}
                    </>
                  )}
                </>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

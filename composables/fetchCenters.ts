const fetchCenters = () =>
  useFetch('https://hyperia-hospital.herokuapp.com/centers', {
    method: 'GET',
    headers: {
      'x-hasura-admin-secret':
        'lLOEeVcdpzO2PDD7e49fTuWxypPhtSIyytNkJh4fw7YANAxwc6HGyR1caq038S8Q',
    },
  })

export default fetchCenters

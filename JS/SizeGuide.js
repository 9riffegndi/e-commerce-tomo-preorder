document.addEventListener("DOMContentLoaded", () => {
  const SizeGuideJS = document.getElementById("SizeGuideJS");
  const SizeGuide = CreateSizeGuide();
  SizeGuideJS.appendChild(SizeGuide);
});

function CreateSizeGuide() {
  const SzGuide = document.createElement("div");
  SzGuide.className = "SizeGuides";
  SzGuide.innerHTML = `
    <div class="container-title">
      <h1>TOMOS Size Guide</h1>
    </div>
    <div class="Container-sz-guide-tshirt">
      <h4>Shoes Tomos Limited Edition</h4>
        <table>
          <thead>
            <tr>
              <th>CM</th>
              <th>US</th>
              <th>EU</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>23</td>
              <td>4.5</td>
              <td>36</td>
            </tr>
            <tr>
              <td>23.5</td>
              <td>5</td>
              <td>37</td>
            </tr>
            <tr>
              <td>24</td>
              <td>6</td>
              <td>38</td>
            </tr>
            <tr>
              <td>25</td>
              <td>7</td>
              <td>39</td>
            </tr>
            <tr>
              <td>25.5</td>
              <td>7.5</td>
              <td>40</td>
            </tr>
            <tr>
              <td>26</td>
              <td>8</td>
              <td>41</td>
            </tr>
            <tr>
              <td>27</td>
              <td>9</td>
              <td>42</td>
            </tr>
            <tr>
              <td>27.5</td>
              <td>9.5</td>
              <td>43</td>
            </tr>
            <tr>
              <td>28</td>
              <td>10</td>
              <td>44</td>
            </tr>
            <tr>
              <td>29</td>
              <td>11</td>
              <td>45</td>
            </tr>
          </tbody>
        </table>
    </div>
    `;
  return SzGuide;
}

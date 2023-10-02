+++
title = 'Plasma Conductivity'
date = 2023-09-27T15:52:10+01:00
draft = true
type = "wiki"
+++

{{< katex />}}

## Magnetised Plasma

Plasma may move across a $\vec{B}$ field with velocity $\vec{v}$ so therefore need to add the $\vec{v}\times\vec{B}$ term to Ohm's law:
$$\vec{j}=\sigma_0\left( \vec{E} + \vec{v}\times\vec{B} \right)$$
where $\sigma_0=n_e e^2/m_e \nu_C=\eta^{-1}$ is the plasma conductivity.

Using $\sigma_0=const.$ is a reasonable approximation under most circumstances, but the more general solution can be found from the general equation of motion:

$$\tag{4.13} m\frac{d\vec{v}}{dt}=q\left(\vec{E}+\vec{v}\times\vec{B}\right)-m\nu_C\left(\vec{v}-\vec{u}\right)$$

We get:

$$
\tag{4.21}
\vec{E}+ \vec{v_e}\times\vec{B} = -\frac{m_e \nu_C}{e}\vec{v_e}
$$

We can now use $(4.15)$ and the definition of $\sigma_0$ to remove the $\vec{v_e}$ component to instead obtain a relationship between $\vec{j}$ and $\vec{E}$, i.e. Ohm's law:

$$
\begin{aligned}
(4.15) \rightarrow \vec{j}=-en_e\vec{v_e} \quad\Rightarrow\quad \vec{v_e} &= -\frac{1}{en_e}\vec{j} \\\
\text{Substitute into above} \\\
\Rightarrow \vec{E}-\frac{1}{en_e}\vec{j}\times\vec{B} &= \frac{m_e\nu_C}{e}\frac{1}{en_e}\vec{j} \\\
&= \frac{m_e\nu_C}{e^2 n_e}\vec{j} \\\
\vec{E}-\frac{1}{en_e}\vec{j}\times\vec{B} &= \frac{1}{\sigma_0}\vec{j} \\\
\Rightarrow \vec{j} &= \sigma_0\vec{E} - \frac{\sigma_0}{en_e}\vec{j}\times\vec{B}
\end{aligned}
$$

To illustrate, we now assume the magnetic field points along the $z$ axis, i.e. $\vec{B}=B\hat{e_z}$:

$$\text{Using gyrofrequency } (2.12) \rightarrow \omega_g=\frac{qB}{m}$$

$$
\begin{aligned}
\frac{\sigma_0}{en_e}\vec{j}\times\vec{B} &= \frac{\sigma_0}{en_e}
\begin{bmatrix}
\hat{i} & \hat{j} & \hat{k} \\\
j_x & j_y & j_z \\\
0 & 0 & B \\\
\end{bmatrix} \\\
&= (Bj_y\hat{i}-Bj_x\hat{j})\frac{\sigma_0}{en_e} \\\
\Rightarrow &=
\begin{pmatrix}
Bj_y \\\ -Bj_x \\\ 0
\end{pmatrix}
\frac{\sigma_0}{en_e} \\\
&= \begin{pmatrix}
Bj_y \\\ -Bj_x \\\ 0
\end{pmatrix}
\frac{e}{m_e\nu_c} \\\
&= \begin{pmatrix}
\frac{Be}{m_e}\frac{1}{\nu_C}j_y \\\
-\frac{Be}{m_e}\frac{1}{\nu_C}j_x \\\
0
\end{pmatrix}
=\begin{pmatrix}
\frac{\omega_{ge}}{\nu_C}j_y \\\
-\frac{\omega_{ge}}{\nu_C}j_x \\\
0
\end{pmatrix} \\\
\end{aligned}
$$

Combining everything we get:

$$
\vec{j} = \sigma_0\begin{pmatrix}E_x\\\ E_y\\\ E_z\end{pmatrix} +
\begin{pmatrix}
\frac{\omega_{ge}}{\nu_C}j_y \\\
-\frac{\omega_{ge}}{\nu_C}j_x \\\
0
\end{pmatrix}
$$

Thus, eliminating $j_y$ in the first equation (for $j_x$) gets:

$$
\begin{aligned}
jx &= \sigma_0E_x &&+ \frac{\omega_g}{\nu_C}\left( \sigma_0E_y-\frac{\omega_g}{\nu_c}j_x \right) \\\
&= \sigma_0E_x &&+ \frac{\omega_g\sigma_0}{nu_C}E_y-\frac{\omega_g^2}{\nu_C^2}j_x \\\
\Rightarrow j_x+\frac{\omega_g^2}{\nu_C^2}j_x &= \sigma_0E_x &&+\frac{\omega_g\sigma_0}{\nu_C}E_y \\\
j_x\left(\frac{\omega_g^2}{\nu_C^2} + 1\right) &= \sigma_0E_x &&+\frac{\omega_g\sigma_0}{\nu_C}E_y \\\
j_x\left(\omega_g^2+\nu_C^2 \right) &= \nu_C^2\sigma_0E_x &&+ \omega_g\sigma_0\nu_C E_y \\\
\end{aligned}
$$

$$
\Rightarrow\boxed{j_x =\frac{\nu_C^2}{\omega_g^2+\nu_C^2}\sigma_0E_x+\frac{\omega_g\nu_C}{\omega_g^2+\nu_C^2}\sigma_o E_y}
$$

For $j_y$:

$$
\begin{aligned}
j*y&=\sigma_0E_y-\frac{\omega_g}{\nu_C}\left( \frac{\nu_C^2}{\omega_g^2+\nu_C^2}\sigma_0E_x+\frac{\omega_g\nu_C}{\omega_g^2+\nu_C^2}\sigma_o E_y \right) \\\
&= -\frac{\omega_g\nu_C}{\omega_g^2+\nu_C^2}\sigma_0E_x-\frac{\omega_g^2}{\omega_g^2+\nu_C^2}\sigma_0E_y+\sigma_0E_y \\\
&= \left( 1 - \frac{\omega_g^2}{\omega_g^2+\nu_C^2} \right)\sigma_0E_y-\frac{\omega_g\nu_C}{\omega_g^2+\nu_C^2}\sigma_o E_x\\\
\end{aligned}
$$

$$
\Rightarrow \boxed{j_y = \frac{\nu_C^2}{\omega_g^2+\nu_C^2}\sigma_0E_y-\frac{\omega_g\nu_C}{\omega_g^2+\nu_C^2}\sigma_o E_x}
$$

And $\boxed{j_z=\sigma_0E_z}$. In dyadic notation:

$$
\begin{aligned}
\vec{j} &= \underline{\sigma}\cdot\vec{E} \\\
&= \begin{pmatrix}
\sigma_P & -\sigma_H & 0 \\\
\sigma_H & \sigma_P & 0 \\\
0 & 0 & \sigma_\parallel
\end{pmatrix} \cdot \vec{E}
\end{aligned}
$$

where

$$
\begin{aligned}
\sigma_P &= \sigma_0 \frac{\nu_C^2}{\omega_g^2+\nu_C^2} &&= \text{Pedersen conductivity} \\\
\sigma_H &= \sigma_0 \frac{\omega_g\nu_C}{\omega_g^2+\nu_C^2} &&= \text{Hall conductivity} \\\
\sigma_\parallel &= \frac{n_ee^2}{m_e\nu_C} &&= \text{Parallel conductivity}
\end{aligned}
$$

Pedersen conductivity governs the Pedersen current in the direction of $\vec{E}\_{\perp}$, Hall conductivity determines the Hall current in the direction perpendicular to both $\vec{E}$ and $\vec{B}$, i.e. in the $-\vec{E}\times\vec{B}$ direction. Parallel conductivity governs the field aligned current driven by the parallel electric field component $\vec{E_\parallel}$, which is equal to the plasma conductivity in the unmagnetised case.

For a magnetic field at an arbitrary angle to $x,y,z$, we get:

$$
\vec{j}=\sigma_\parallel+\sigma_P\vec{E_\perp}-\sigma_H\frac{\vec{E_\perp}\times\vec{B}}{B}
$$

## References

[[Basic Space Plasma Physics]]
